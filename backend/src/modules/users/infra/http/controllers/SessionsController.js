const AuthenticateUserService = require('../../../services/AuthenticateUserService');

const hashProvider = require('../../../providers/implementations/BCryptHashProvider');

const usersRepository = require('../../sequelize/repositories/UsersRepository');

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService(
      usersRepository,
      hashProvider,
    );

    // Get the user and token that is returned from the service
    const userAndToken = await authenticateUser.execute({
      email,
      password,
    });

    return response.json(userAndToken);
  }
}

module.exports = SessionsController;
