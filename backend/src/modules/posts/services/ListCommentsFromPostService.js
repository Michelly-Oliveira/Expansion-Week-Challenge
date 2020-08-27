const AppError = require('../../../shared/errors/AppError');

class ListCommentsFromPostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  execute({ post_id }) {
    const findPostIndex = this.postsRepository.findIndex(
      post => post.id === post_id,
    );

    if (findPostIndex < 0) {
      throw new AppError({
        status: 404,
        error: 'Cannot list comments from non-existing post',
      });
    }

    const comments = this.postsRepository[findPostIndex].comments;

    return comments;
  }
}

module.exports = ListCommentsFromPostService;
