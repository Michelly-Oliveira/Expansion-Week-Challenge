const AppError = require('../../../shared/errors/AppError');

class DeleteCommentFromPostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  execute({ post_id, comment_id }) {
    const findPostIndex = this.postsRepository.findIndex(
      post => post.id === post_id,
    );

    if (findPostIndex < 0) {
      throw new AppError({
        status: 404,
        error: 'Cannot delete comment from non-existing post',
      });
    }

    const findComment = this.postsRepository[findPostIndex].comments.findIndex(
      comment => comment.id === comment_id,
    );

    if (findComment < 0) {
      throw new AppError({
        status: 404,
        error: 'Cannot delete non-existing comment',
      });
    }

    const post = this.postsRepository[findPostIndex];

    post.comments.splice(findComment, 1);
  }
}

module.exports = DeleteCommentFromPostService;
