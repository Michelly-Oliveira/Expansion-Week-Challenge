const AppError = require('../../../shared/errors/AppError');

class ListUserPostsService {
  constructor(usersRepository, postsRepository) {
    this.usersRepository = usersRepository;
    this.postsRepository = postsRepository;
  }

  async execute({ user_id }) {
    try {
      // Check if user exists
      const user = await this.usersRepository.findById(user_id);

      if (!user) {
        throw new AppError('Cannot find user');
      }

      // Get the posts from that user
      const posts = await this.postsRepository.list(user_id);

      // Return user data and posts
      return posts;
    } catch (err) {
      return err;
    }
  }
}

module.exports = ListUserPostsService;
