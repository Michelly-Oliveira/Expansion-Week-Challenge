const ListCommentsFromPostService = require('../../../services/ListCommentsFromPostService');
const AddCommentToPostService = require('../../../services/AddCommentToPostService');
const DeleteCommentFromPostService = require('../../../services/DeleteCommentFromPostService');

const postsRepository = require('../../sequelize/repositories/PostsRepository');

class CommentsController {
  async index(request, response) {
    const { post_id } = request.params;

    const listCommentsFromPost = new ListCommentsFromPostService(
      postsRepository,
    );

    const comments = await listCommentsFromPost.execute({
      post_id,
    });

    return response.json(comments);
  }

  async create(request, response) {
    const { id } = request.user;
    const { post_id } = request.params;
    const { content } = request.body;

    const addCommentToPost = new AddCommentToPostService(postsRepository);

    const postWithComment = await addCommentToPost.execute({
      post_id,
      content,
      user_id: id,
    });

    return response.json(postWithComment);
  }

  async delete(request, response) {
    const { post_id, comment_id } = request.params;

    const deleteCommentFromPost = new DeleteCommentFromPostService(
      postsRepository,
    );

    const deleted = await deleteCommentFromPost.execute({
      post_id,
      comment_id,
    });

    return response.json(deleted);
  }
}

module.exports = CommentsController;
