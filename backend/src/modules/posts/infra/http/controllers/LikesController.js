const AddLikeToPostService = require('../../../services/AddLikeToPostService');
const DeleteLikeFromPostService = require('../../../services/DeleteLikeFromPostService');

const postsRepository = require('../../../repositories/PostsRepository');

class LikesController {
  create(request, response) {
    const { id } = request.params;

    const addLikeToPost = new AddLikeToPostService(postsRepository);

    const postWithOneMoreLike = addLikeToPost.execute({
      post_id: id,
    });

    return response.json(postWithOneMoreLike);
  }

  delete(request, response) {
    const { id } = request.params;

    const deleteLikeFromPost = new DeleteLikeFromPostService(postsRepository);

    const post = deleteLikeFromPost.execute({
      post_id: id,
    });

    return response.json(post);
  }
}

module.exports = LikesController;
