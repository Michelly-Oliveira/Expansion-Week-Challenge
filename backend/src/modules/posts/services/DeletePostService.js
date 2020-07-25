const postsRepository = require('../repositories/PostsRepository');

class UpdatePostService {
  execute({ post_id }) {
    const findPostIndex = postsRepository.findIndex(
      post => post.id === post_id,
    );

    if (findPostIndex < 0) {
      throw new Error({ status: 404, error: 'Could not find post' });
    }

    postsRepository.splice(findPostIndex, 1);
  }
}

module.exports = UpdatePostService;
