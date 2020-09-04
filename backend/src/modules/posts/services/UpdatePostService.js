const AppError = require('../../../shared/errors/AppError');

class UpdatePostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute({ post_id, content }) {
    try {
      const findPostIndex = await this.postsRepository.findByIndex(post_id);

      if (findPostIndex < 0) {
        throw new AppError({ status: 404, error: 'Could not find post' });
      }

      const updatedPost = await this.postsRepository.saveContent(
        findPostIndex,
        content,
      );

      return updatedPost;
    } catch (err) {
      return err;
    }
  }
}

module.exports = UpdatePostService;
