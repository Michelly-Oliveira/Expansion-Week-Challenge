const ListCommentsFromPostService = require('../../../services/ListCommentsFromPostService');
const AddCommentToPostService = require('../../../services/AddCommentToPostService');
const DeleteCommentFromPostService = require('../../../services/DeleteCommentFromPostService');

const postsRepository = require('../../../repositories/PostsRepository');

class CommentsController {
  index(request, response) {
    const { id } = request.params;

    const listCommentsFromPost = new ListCommentsFromPostService(
      postsRepository,
    );

    const comments = listCommentsFromPost.execute({
      post_id: id,
    });

    return response.json(comments);
  }

  create(request, response) {
    const { id } = request.params;
    const { content } = request.body;

    const addCommentToPost = new AddCommentToPostService(postsRepository);

    const postWithComment = addCommentToPost.execute({
      post_id: id,
      content,
    });

    return response.json(postWithComment);
  }

  delete(request, response) {
    const { id, comment_id } = request.params;

    const deleteCommentFromPost = new DeleteCommentFromPostService(
      postsRepository,
    );

    deleteCommentFromPost.execute({
      post_id: id,
      comment_id,
    });

    return response.send({ msg: 'Comment removed' });
  }
}

module.exports = CommentsController;
