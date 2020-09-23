const AppError = require('../../../shared/errors/AppError');

class ListFollowingUsersService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ user_id }) {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Cannot display users being followed');
    }

    return user.following;
  }
}

module.exports = ListFollowingUsersService;
