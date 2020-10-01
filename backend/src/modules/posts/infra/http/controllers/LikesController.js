const AddLikeToPostService = require('../../../services/AddLikeToPostService');
const DeleteLikeFromPostService = require('../../../services/DeleteLikeFromPostService');

const postsRepository = require('../../sequelize/repositories/PostsRepository');

class LikesController {
  async create(request, response) {
    const { id } = request.user;
    const { post_id } = request.params;

    const addLikeToPost = new AddLikeToPostService(postsRepository);

    const post = await addLikeToPost.execute({
      post_id,
      user_id: id,
    });

    return response.json(post);
  }

  async delete(request, response) {
    const { id } = request.user;
    const { post_id } = request.params;

    const deleteLikeFromPost = new DeleteLikeFromPostService(postsRepository);

    const post = await deleteLikeFromPost.execute({
      post_id,
      user_id: id,
    });

    return response.json(post);
  }
}

module.exports = LikesController;
