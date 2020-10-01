const AppError = require('../../../shared/errors/AppError');

class DeleteLikeFromPostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute({ post_id, user_id }) {
    const post = await this.postsRepository.findById(post_id);

    if (!post) {
      throw new AppError({
        status: 404,
        error: 'Cannot remove like from non-existing post',
      });
    }

    const usersThatLikedPost = post.likes.filter(
      userLike => userLike !== user_id,
    );

    post.likes = [...usersThatLikedPost];

    await this.postsRepository.save(post);

    return post;
  }
}

module.exports = DeleteLikeFromPostService;
