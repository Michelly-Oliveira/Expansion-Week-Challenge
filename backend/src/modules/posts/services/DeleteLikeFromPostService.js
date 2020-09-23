const AppError = require('../../../shared/errors/AppError');

class DeleteLikeFromPostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute({ post_id }) {
    const post = await this.postsRepository.findById(post_id);

    if (!post) {
      throw new AppError({
        status: 404,
        error: 'Cannot delete like from non-existing post',
      });
    }

    const postRemovedLike = await this.postsRepository.removeLike(post);

    return postRemovedLike;
  }
}

module.exports = DeleteLikeFromPostService;
