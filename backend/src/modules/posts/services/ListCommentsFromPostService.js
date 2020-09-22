const AppError = require('../../../shared/errors/AppError');

class ListCommentsFromPostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute({ post_id }) {
    try {
      const post = await this.postsRepository.findById(post_id);

      if (!post) {
        throw new AppError({
          status: 404,
          error: 'Cannot list comments from non-existing post',
        });
      }

      const comments = post.comments;

      return comments;
    } catch (err) {
      return err;
    }
  }
}

module.exports = ListCommentsFromPostService;
