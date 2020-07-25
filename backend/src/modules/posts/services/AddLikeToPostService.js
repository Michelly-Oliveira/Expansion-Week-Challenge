const postsRepository = require('../repositories/PostsRepository');

class AddLikeToPostService {
  execute({ post_id }) {
    const findPostIndex = postsRepository.findIndex(
      post => post.id === post_id,
    );

    if (findPostIndex < 0) {
      throw new Error({
        status: 404,
        error: 'Cannot add like to non-existing post',
      });
    }

    const postToAddLike = postsRepository[findPostIndex];

    postToAddLike.likes++;

    return postToAddLike;
  }
}

module.exports = AddLikeToPostService;
