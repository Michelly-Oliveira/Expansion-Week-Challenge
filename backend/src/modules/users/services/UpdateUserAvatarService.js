const AppError = require('../../../shared/errors/AppError');

class UpdateUserAvatarService {
  constructor(usersRepository, storageProvider) {
    this.usersRepository = usersRepository;
    this.storageProvider = storageProvider;
  }

  async execute({ user_id, avatarFileName }) {
    try {
      const user = await this.usersRepository.findById(user_id);

      // Get the user id from the request object - so the user must be authenticated
      if (!user) {
        throw new AppError('Only authenticated users can change avatar', 401);
      }

      // Check if user already has an avatar on storage
      if (user.avatar) {
        // Delete avatar
        this.storageProvider.deleteFile(avatarFileName);
      }

      // Save new avatar on storage
      const fileName = await this.storageProvider.saveFile(avatarFileName);

      // Add new image to user field avatar
      user.avatar = fileName;
      user.avatar_url = `http://localhost:3333/files/${fileName}`;

      // Update user data on database
      await this.usersRepository.save(user);

      return user;
    } catch (err) {
      return err;
    }
  }
}

module.exports = UpdateUserAvatarService;
