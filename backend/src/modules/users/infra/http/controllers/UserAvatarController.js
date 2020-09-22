const UpdateUserAvatarService = require('../../../services/UpdateUserAvatarService');

const usersRepository = require('../../sequelize/repositories/UsersRepository');
const storageProvider = require('../../../../../shared/providers/StorageProvider/implementations/DiskStorageProvider');

class UserAvatarController {
  async update(request, response) {
    const { id } = request.user;

    const updateUserAvatar = new UpdateUserAvatarService(
      usersRepository,
      storageProvider,
    );

    const user = await updateUserAvatar.execute({
      user_id: id,
      avatarFileName: request.file.filename,
    });

    return response.json(user);
  }
}

module.exports = UserAvatarController;
