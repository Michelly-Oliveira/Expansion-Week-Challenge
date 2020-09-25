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
        error: 'Cannot remove like from non-existing post',
      });
    }

    const postWithRemovedLike = await this.postsRepository.removeLike(post);

    return postWithRemovedLike;
  }
}

module.exports = DeleteLikeFromPostService;
