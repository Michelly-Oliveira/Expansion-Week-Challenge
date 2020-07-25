const postsRepository = require('../repositories/PostsRepository');

class DeleteCommentFromPostService {
  execute({ post_id, comment_id }) {
    const findPostIndex = postsRepository.findIndex(
      post => post.id === post_id,
    );

    if (findPostIndex < 0) {
      throw new Error({
        status: 404,
        error: 'Cannot delete comment from non-existing post',
      });
    }

    const findComment = postsRepository[findPostIndex].comments.findIndex(
      comment => comment.id === comment_id,
    );

    if (findComment < 0) {
      throw new Error({
        status: 404,
        error: 'Cannot delete non-existing comment',
      });
    }

    const post = postsRepository[findPostIndex];

    post.comments.splice(findComment, 1);
  }
}

module.exports = DeleteCommentFromPostService;
