const AddLikeToPostService = require('../../../services/AddLikeToPostService');
const DeleteLikeFromPostService = require('../../../services/DeleteLikeFromPostService');

const postsRepository = require('../../../repositories/fakes/FakePostsRepository');

class LikesController {
  async create(request, response) {
    const { id } = request.params;

    const addLikeToPost = new AddLikeToPostService(postsRepository);

    const postWithOneMoreLike = await addLikeToPost.execute({
      post_id: id,
    });

    return response.json(postWithOneMoreLike);
  }

  async delete(request, response) {
    const { id } = request.params;

    const deleteLikeFromPost = new DeleteLikeFromPostService(postsRepository);

    const post = await deleteLikeFromPost.execute({
      post_id: id,
    });

    return response.json(post);
  }
}

module.exports = LikesController;
