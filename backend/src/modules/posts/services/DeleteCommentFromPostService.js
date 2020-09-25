const AppError = require('../../../shared/errors/AppError');

class DeleteCommentFromPostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute({ post_id, comment_id }) {
    const post = await this.postsRepository.findById(post_id);

    if (!post) {
      throw new AppError({
        status: 404,
        error: 'Cannot delete comment from non-existing post',
      });
    }

    const commentIndex = post.comments.findIndex(
      comment => comment.id === comment_id,
    );

    if (commentIndex < 0) {
      throw new AppError({
        status: 404,
        error: 'Cannot delete non-existing comment',
      });
    }

    await this.postsRepository.removeComment(post, commentIndex);

    return { msg: 'Comment deleted' };
  }
}

module.exports = DeleteCommentFromPostService;
