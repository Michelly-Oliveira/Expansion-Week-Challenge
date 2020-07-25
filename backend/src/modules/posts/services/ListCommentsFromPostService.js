const postsRepository = require('../repositories/PostsRepository');

class ListCommentsFromPostService {
  execute({ post_id }) {
    const findPostIndex = postsRepository.findIndex(
      post => post.id === post_id,
    );

    if (findPostIndex < 0) {
      throw new Error({
        status: 404,
        error: 'Cannot list comments from non-existing post',
      });
    }

    const comments = postsRepository[findPostIndex].comments;

    return comments;
  }
}

module.exports = ListCommentsFromPostService;
