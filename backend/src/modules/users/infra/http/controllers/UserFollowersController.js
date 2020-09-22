const ListUserFollowersService = require('../../../services/ListUserFollowersService');

const usersRepository = require('../../sequelize/repositories/UsersRepository');

class UserFollowersController {
  async index(request, response) {
    const { id } = request.user;

    const userFollowers = new ListUserFollowersService(usersRepository);

    const followers = await userFollowers.execute({
      user_id: id,
    });

    return response.json(followers);
  }
}

module.exports = UserFollowersController;
