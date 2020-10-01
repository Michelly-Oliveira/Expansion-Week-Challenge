const AppError = require('../../../shared/errors/AppError');

class AddLikeToPostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute({ post_id, user_id }) {
    const post = await this.postsRepository.findById(post_id);

    if (!post) {
      throw new AppError({
        status: 404,
        error: 'Cannot add like to non-existing post',
      });
    }

    if (post.likes.join(', ').includes(user_id)) {
      return post;
    }

    const postToAddLike = await this.postsRepository.addLike(post, user_id);

    postToAddLike.like.push(user_id);

    return postToAddLike;
  }
}

module.exports = AddLikeToPostService;
