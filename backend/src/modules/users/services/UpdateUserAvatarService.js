const AppError = require('../../../shared/errors/AppError');

class UpdateProfileService {
  constructor(usersRepository, storageProvider) {
    this.usersRepository = usersRepository;
    this.storageProvider = storageProvider;
  }

  async execute({ user_id, avatarFileName }) {
    try {
      const user = this.usersRepository.findById(user_id);

      // Get the user id from the requesr object - so the user must be authenticated
      if (!user) {
        throw new AppError('Only authenticated users can change avatar', 401);
      }

      // Check if user already has an avatar on storage
      if (user.avatar) {
        // Delete avatar
        this.storageProvider.deleteFile(avatarFileName);
      }

      // Save new avatar on storage
      const fileName = await this.storageProvider.saveFile(avatarFileName);

      // Add new image to user field avatar
      user.avatar = fileName;

      // Update user data on database
      await this.usersRepository.save(user);

      return user;
    } catch (err) {
      return err;
    }
  }
}

module.exports = UpdateProfileService;
