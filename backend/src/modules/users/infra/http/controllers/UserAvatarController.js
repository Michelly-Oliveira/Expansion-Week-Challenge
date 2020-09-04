const UpdateUserAvatarService = require('../../../services/UpdateUserAvatarService');

const usersRepository = require('../../../repositories/fakes/FakeUsersRepository');
const storageProvider = require('../../../../../shared/providers/StorageProvider/implementations/DiskStorageProvider');

class UserAvatarController {
  async update(request, response) {
    const updateUserAvatar = new UpdateUserAvatarService(
      usersRepository,
      storageProvider,
    );

    const user = await updateUserAvatar.execute({
      user_id: 'user_id',
      avatarFileName: request.file.filename,
    });

    return response.json(user);
  }
}

module.exports = UserAvatarController;
