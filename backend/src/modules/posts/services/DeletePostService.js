const AppError = require('../../../shared/errors/AppError');

class DeletePostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute({ post_id, user_id }) {
    const post = await this.postsRepository.findById(post_id);

    if (!post) {
      throw new AppError({ status: 404, error: 'Cannot find post' });
    }

    if (post.user_id !== user_id) {
      throw new AppError({
        status: 401,
        error: 'You do not have permission to edit this post',
      });
    }

    await this.postsRepository.delete(post);

    return { msg: 'Post deleted' };
  }
}

module.exports = DeletePostService;
