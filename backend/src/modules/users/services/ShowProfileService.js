const AppError = require('../../../shared/errors/AppError');

class ShowProfileService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ user_id }) {
    // Check if user exists
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Cannot find user');
    }

    return user;
  }
}

module.exports = ShowProfileService;
