const UpdateProfileService = require('../../../services/UpdateProfileService');
const ShowProfileService = require('../../../services/ShowProfileService');

const usersRepository = require('../../sequelize/repositories/UsersRepository');
const hashProvider = require('../../../providers/implementations/BCryptHashProvider');

class ProfileController {
  async update(request, response) {
    const { id } = request.user;
    const { email, old_password, password, name } = request.body;

    const updateProfile = new UpdateProfileService(
      usersRepository,
      hashProvider,
    );

    const user = await updateProfile.execute({
      user_id: id,
      email,
      old_password,
      password,
      name,
    });

    return response.json(user);
  }

  async show(request, response) {
    // Authenticated user
    const { id } = request.params;

    const showProfile = new ShowProfileService(usersRepository);

    const user = await showProfile.execute({
      user_id: id,
    });

    return response.json(user);
  }
}

module.exports = ProfileController;
