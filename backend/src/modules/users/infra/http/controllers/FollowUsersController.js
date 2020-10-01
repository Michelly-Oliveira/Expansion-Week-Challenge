const FollowAnotherUserService = require('../../../services/FollowAnotherUserService');
const UnfollowAnotherUserService = require('../../../services/UnfollowAnotherUserService');
const ListFollowingUsersService = require('../../../services/ListFollowingUsersService');

const usersRepository = require('../../sequelize/repositories/UsersRepository');

class FollowUsersController {
  async create(request, response) {
    const { id } = request.user;
    const { follow_user_id } = request.body;

    const followUser = new FollowAnotherUserService(usersRepository);

    const user = await followUser.execute({
      user_id: id,
      follow_user_id,
    });

    return response.json(user);
  }

  async delete(request, response) {
    const { id } = request.user;
    const { unfollow_user_id } = request.body;

    const unfollowUser = new UnfollowAnotherUserService(usersRepository);

    const user = await unfollowUser.execute({
      user_id: id,
      unfollow_user_id,
    });

    return response.json(user);
  }

  async index(request, response) {
    const { id } = request.user;

    const followingUsers = new ListFollowingUsersService(usersRepository);

    const following = await followingUsers.execute({
      user_id: id,
    });

    return response.json(following);
  }
}

module.exports = FollowUsersController;
