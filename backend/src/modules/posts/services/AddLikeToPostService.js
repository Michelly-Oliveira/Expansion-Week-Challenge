const AppError = require('../../../shared/errors/AppError');

class AddLikeToPostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute({ post_id }) {
    const post = await this.postsRepository.findById(post_id);

    if (!post) {
      throw new AppError({
        status: 404,
        error: 'Cannot add like to non-existing post',
      });
    }

    const postToAddLike = await this.postsRepository.addLike(post);

    return postToAddLike;
  }
}

module.exports = AddLikeToPostService;
