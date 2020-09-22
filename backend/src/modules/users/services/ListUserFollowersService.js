const AppError = require('../../../shared/errors/AppError');

class ListUserFollowersController {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ user_id }) {
    try {
      const user = await this.usersRepository.findById(user_id);

      if (!user) {
        throw new AppError('Cannot display user followers');
      }

      // Loop through the usersRepository array, and for each user, loop through the following array and check if the user_id is there
      const users = await this.usersRepository.listAllUsers();

      const followers = [];

      users.forEach(checkUserFollowing => {
        if (checkUserFollowing.following.join(', ').includes(user_id)) {
          followers.push(checkUserFollowing.id);
        }
      });

      return followers;
    } catch (err) {
      return err;
    }
  }
}

module.exports = ListUserFollowersController;
