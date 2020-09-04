const UpdateProfileService = require('../../../services/UpdateProfileService');
// const ShowProfileService = require('../../../services/ShowProfileService');

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

  // show(request, response) {
  //   const { email, password, name } = request.body;

  //   const createUser = new CreateUserService(usersRepository);

  //   const user = createUser.execute({
  //     email,
  //     password,
  //     name,
  //   });

  //   return response.json(user);
  // }
}

module.exports = ProfileController;
