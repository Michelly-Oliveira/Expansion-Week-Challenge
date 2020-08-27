const CreateUserService = require('../../../services/CreateUserService');

const usersRepository = require('../../../repositories/UsersRepository');

class UsersController {
  create(request, response) {
    const { email, password, name } = request.body;

    const createUser = new CreateUserService(usersRepository);

    const user = createUser.execute({
      email,
      password,
      name,
    });

    return response.json(user);
  }
}

module.exports = UsersController;
