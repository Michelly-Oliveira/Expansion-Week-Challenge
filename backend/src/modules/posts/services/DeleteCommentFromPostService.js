const AppError = require('../../../shared/errors/AppError');

class DeleteCommentFromPostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute({ post_id, comment_id }) {
    try {
      const findPostIndex = await this.postsRepository.findByIndex(post_id);

      if (findPostIndex < 0) {
        throw new AppError({
          status: 404,
          error: 'Cannot delete comment from non-existing post',
        });
      }

      const findComment = await this.postsRepository[
        findPostIndex
      ].comments.findIndex(comment => comment.id === comment_id);

      if (findComment < 0) {
        throw new AppError({
          status: 404,
          error: 'Cannot delete non-existing comment',
        });
      }

      await this.posts.removeComment(findPostIndex, findComment);
    } catch (err) {
      return err;
    }
  }
}

module.exports = DeleteCommentFromPostService;
