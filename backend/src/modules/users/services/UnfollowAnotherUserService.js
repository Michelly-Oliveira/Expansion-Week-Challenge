const AppError = require('../../../shared/errors/AppError');

class UnfollowAnotherUserSErvice {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ user_id, unfollow_user_id }) {
    try {
      const user = await this.usersRepository.findById(user_id);

      // Check if user exists
      const userToUnfollow = await this.usersRepository.findById(
        unfollow_user_id,
      );

      if (!userToUnfollow) {
        throw new AppError('Cannot unfollow user that does not exist');
      }

      // Create another variable to store the array of ids while there is no database/repository, so we can use the methods for arrays
      const followingUsers = [...user.following];

      const currentFollowing = followingUsers.filter(
        followingUserId => followingUserId !== unfollow_user_id,
      );

      user.following = [...currentFollowing];

      return user;
    } catch (err) {
      return err;
    }
  }
}

module.exports = UnfollowAnotherUserSErvice;
