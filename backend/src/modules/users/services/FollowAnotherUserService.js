const AppError = require('../../../shared/errors/AppError');

class FollowAnotherUserService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ user_id, follow_user_id }) {
    const user = await this.usersRepository.findById(user_id);

    // Check if user exists
    const userToFollow = await this.usersRepository.findById(follow_user_id);

    if (!userToFollow) {
      throw new AppError('Cannot follow user that does not exist');
    }

    // Check if the user isn't already on the list and if user is not trying to follow himself
    if (
      !user.following.join(', ').includes(follow_user_id) &&
      follow_user_id !== user_id
    ) {
      // Update array on database
      await this.usersRepository.updateFollowingArray(user, follow_user_id);

      // Update array locally to show new array
      user.following.push(follow_user_id);
    }

    return user;
  }
}

module.exports = FollowAnotherUserService;
