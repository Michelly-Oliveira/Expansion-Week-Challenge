const CreateUserService = require('../../../services/CreateUserService');

const hashProvider = require('../../../providers/implementations/BCryptHashProvider');

const usersRepository = require('../../../repositories/fakes/FakeUsersRepository');

class UsersController {
  async create(request, response) {
    const { email, password, name } = request.body;

    const createUser = new CreateUserService(usersRepository, hashProvider);

    const user = await createUser.execute({
      email,
      password,
      name,
    });

    return response.json(user);
  }
}

module.exports = UsersController;
