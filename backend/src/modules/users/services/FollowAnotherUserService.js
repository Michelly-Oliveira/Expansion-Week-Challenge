const AppError = require('../../../shared/errors/AppError');

class FollowAnotherUserService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ user_id, follow_user_id }) {
    try {
      const user = await this.usersRepository.findById(user_id);

      // Check if user exists
      const userToFollow = await this.usersRepository.findById(follow_user_id);

      if (!userToFollow) {
        throw new AppError('Cannot follow user that does not exist');
      }

      // Check if the user isn't already on the list
      if (!user.following.join(', ').includes(follow_user_id)) {
        user.following.push(follow_user_id);
      }

      return user;
    } catch (err) {
      return err;
    }
  }
}

module.exports = FollowAnotherUserService;
