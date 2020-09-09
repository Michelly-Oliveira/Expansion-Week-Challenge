const UpdateProfileService = require('../../../services/UpdateProfileService');
const ShowProfileService = require('../../../services/ShowProfileService');

const usersRepository = require('../../../repositories/fakes/FakeUsersRepository');

class ProfileController {
  async update(request, response) {
    // const user_id = 'user_id';
    const { email, old_password, password, name, user_id } = request.body;

    const updateProfile = new UpdateProfileService(usersRepository);

    const user = await updateProfile.execute({
      user_id,
      email,
      old_password,
      password,
      name,
    });

    return response.json(user);
  }

  async show(request, response) {
    // Authenticated user
    const { user_id } = request.params;

    const showProfile = new ShowProfileService(usersRepository);

    const user = await showProfile.execute({
      user_id,
    });

    return response.json(user);
  }
}

module.exports = ProfileController;
