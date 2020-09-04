const AppError = require('../../../shared/errors/AppError');

class UpdateProfileService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ user_id, email, old_password, password, name }) {
    try {
      const user = await this.usersRepository.findById(user_id);

      if (!user) {
        throw new AppError('User not found');
      }

      // Update email only if new email was provided
      if (email) {
        const findUserWithNewEmail = await this.usersRepository.findByEmail(
          email,
        );

        // Check if email is used by another user
        if (findUserWithNewEmail && findUserWithNewEmail.id !== user_id) {
          throw new AppError('Provided email is already used by another user');
        }

        user.email = email;
      }

      // Update name only if new name was provided
      if (name) {
        const findUserWithNewName = await this.usersRepository.findByName(name);

        // Check if name is already used by another user
        if (findUserWithNewName && findUserWithNewName.id !== user_id) {
          throw new AppError('Provided name is already used by another user');
        }

        user.name = name;
      }

      // Update password
      // If the user wants to change the password but didn't provide the old password
      if (password && !old_password) {
        throw new AppError(
          'You need to imform the old password to set a new password',
        );
      }

      // If the user wants to change the password
      if (password && old_password) {
        // Check if the old password provided by the user is correct
        if (old_password !== user.password) {
          throw new AppError('Current password incorrect');
        }

        user.password = password;
      }

      await this.usersRepository.save(user);

      return user;
    } catch (err) {
      return err;
    }
  }
}

module.exports = UpdateProfileService;
