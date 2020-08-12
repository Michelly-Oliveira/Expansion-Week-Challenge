class AddLikeToPostService {
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
        error: 'Cannot add like to non-existing post',
      });
    }

    const postToAddLike = this.postsRepository[findPostIndex];

    postToAddLike.likes++;

    return postToAddLike;
  }
}

module.exports = AddLikeToPostService;
