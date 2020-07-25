const postsRepository = require('../repositories/PostsRepository');

class UpdatePostService {
  execute({ post_id, content }) {
    const findPostIndex = postsRepository.findIndex(
      post => post.id === post_id,
    );

    if (findPostIndex < 0) {
      throw new Error({ status: 404, error: 'Could not find post' });
    }

    postsRepository[findPostIndex].content = content;

    const updatedPost = postsRepository[findPostIndex];

    return updatedPost;
  }
}

module.exports = UpdatePostService;
