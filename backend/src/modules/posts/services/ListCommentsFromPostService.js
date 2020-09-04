const AppError = require('../../../shared/errors/AppError');

class ListCommentsFromPostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute({ post_id }) {
    try {
      const findPostIndex = await this.postsRepository.findByIndex(post_id);

      if (findPostIndex < 0) {
        throw new AppError({
          status: 404,
          error: 'Cannot list comments from non-existing post',
        });
      }

      const comments = await this.postsRepository.listcomments(findPostIndex);

      return comments;
    } catch (err) {
      return err;
    }
  }
}

module.exports = ListCommentsFromPostService;
