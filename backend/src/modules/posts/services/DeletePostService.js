const AppError = require('../../../shared/errors/AppError');

class DeletePostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute({ post_id }) {
    try {
      const findPostIndex = await this.postsRepository.findByIndex(post_id);

      if (findPostIndex < 0) {
        throw new AppError({ status: 404, error: 'Could not find post' });
      }

      await this.postsRepository.delete(findPostIndex);
    } catch (err) {
      return err;
    }
  }
}

module.exports = DeletePostService;
