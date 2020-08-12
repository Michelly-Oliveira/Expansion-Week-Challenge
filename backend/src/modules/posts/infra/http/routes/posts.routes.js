const Router = require('express');
const postsRouter = Router();

const PostsController = require('../controllers/PostsController');
const UserPostsController = require('../controllers/UserPostsController');

const LikesController = require('../controllers/LikesController');

const AddCommentToPostService = require('../../../services/AddCommentToPostService');
const DeleteCommentFromPostService = require('../../../services/DeleteCommentFromPostService');
const ListCommentsFromPostService = require('../../../services/ListCommentsFromPostService');

const postsControllers = new PostsController();
const userPostsControllers = new UserPostsController();
const likesControllers = new LikesController();

postsRouter.get('/', userPostsControllers.index);

// User must be authenticated to be able to interact with posts: create a middleware to ensure the user is authenticated
postsRouter.post('/', postsControllers.create);

postsRouter.put('/:id', userPostsControllers.update);

postsRouter.delete('/:id', userPostsControllers.delete);

// Handle likes on a post
postsRouter.post('/:id/like', likesControllers.create);

postsRouter.delete('/:id/like', likesControllers.delete);

// // Handle comments on a post
postsRouter.post('/:id/comment', (request, response) => {
  const { id } = request.params;
  const { content } = request.body;

  const addCommentToPost = new AddCommentToPostService();

  const postWithComment = addCommentToPost.execute({
    post_id: id,
    content,
  });

  return response.json(postWithComment);
});

postsRouter.delete('/:id/comment/:comment_id', (request, response) => {
  const { id, comment_id } = request.params;

  const deleteCommentFromPost = new DeleteCommentFromPostService();

  deleteCommentFromPost.execute({
    post_id: id,
    comment_id,
  });

  return response.send({ msg: 'Comment removed' });
});

postsRouter.get('/:id/comment', (request, response) => {
  const { id } = request.params;

  const listCommentsFromPost = new ListCommentsFromPostService();

  const comments = listCommentsFromPost.execute({
    post_id: id,
  });

  return response.json(comments);
});

module.exports = postsRouter;
