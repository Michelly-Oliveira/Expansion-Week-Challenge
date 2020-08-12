class DeleteLikeFromPostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  execute({ post_id }) {
    const findPostIndex = this.postsRepository.findIndex(
      post => post.id === post_id,
    );

    if (findPostIndex < 0) {
      throw new Error({
        status: 404,
        error: 'Cannot delete like from non-existing post',
      });
    }

    const post = this.postsRepository[findPostIndex];

    // The post has at least one like
    if (post.likes > 0) {
      post.likes--;
    }

    return post;
  }
}

module.exports = DeleteLikeFromPostService;
