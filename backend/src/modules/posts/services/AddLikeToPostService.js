const AppError = require('../../../shared/errors/AppError');

class AddLikeToPostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute({ post_id }) {
    try {
      const findPostIndex = await this.postsRepository.findByIndex(post_id);

      if (findPostIndex < 0) {
        throw new AppError({
          status: 404,
          error: 'Cannot add like to non-existing post',
        });
      }

      const postToAddLike = await this.postsRepository.addLike(findPostIndex);

      return postToAddLike;
    } catch (err) {
      return err;
    }
  }
}

module.exports = AddLikeToPostService;
