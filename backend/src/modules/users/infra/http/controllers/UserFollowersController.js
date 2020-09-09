const ListUserFollowersService = require('../../../services/ListUserFollowersService');

const usersRepository = require('../../../repositories/fakes/FakeUsersRepository');

class UserFollowersController {
  async index(request, response) {
    const { id } = request.params;

    const userFollowers = new ListUserFollowersService(usersRepository);

    const followers = await userFollowers.execute({
      user_id: id,
    });

    return response.json(followers);
  }
}

module.exports = UserFollowersController;
