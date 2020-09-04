const AppError = require('../../../shared/errors/AppError');

class DeleteLikeFromPostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute({ post_id }) {
    try {
      const findPostIndex = await this.postsRepository.findByIndex(post_id);

      if (findPostIndex < 0) {
        throw new AppError({
          status: 404,
          error: 'Cannot delete like from non-existing post',
        });
      }

      const post = await this.postsRepository.removeLike(findPostIndex);

      return post;
    } catch (err) {
      return err;
    }
  }
}

module.exports = DeleteLikeFromPostService;
