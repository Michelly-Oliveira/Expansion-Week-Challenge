const AppError = require('../../../shared/errors/AppError');

class ListFollowingUsersService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ user_id }) {
    try {
      const user = await this.usersRepository.findById(user_id);

      if (!user) {
        throw new AppError('Cannot display users being followed');
      }

      return user.following;
    } catch (err) {
      return err;
    }
  }
}

module.exports = ListFollowingUsersService;
