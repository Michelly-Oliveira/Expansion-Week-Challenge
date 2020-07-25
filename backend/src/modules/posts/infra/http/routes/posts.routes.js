const Router = require('express');
const postsRouter = Router();

const CreatePostService = require('../../../services/CreatePostService');
const UpdatePostService = require('../../../services/UpdatePostService');
const DeletePostService = require('../../../services/DeletePostService');
const ListPostsService = require('../../../services/ListPostsService');

const AddLikeToPostService = require('../../../services/AddLikeToPostService');
const DeleteLikeFromPostService = require('../../../services/DeleteLikeFromPostService');

const AddCommentToPostService = require('../../../services/AddCommentToPostService');
const DeleteCommentFromPostService = require('../../../services/DeleteCommentFromPostService');
const ListCommentsFromPostService = require('../../../services/ListCommentsFromPostService');

// http://localhost:3333/posts
postsRouter.get('/', (request, response) => {
  const listPosts = new ListPostsService();

  const post = listPosts.execute();

  return response.json(post);
});

// User must be authenticated to be able to interact with posts: create a middleware to ensure the user is authenticated
postsRouter.post('/', (request, response) => {
  const { content } = request.body;

  const createPost = new CreatePostService();

  const post = createPost.execute({
    user_id: 'whoWroteThePost_Id',
    content,
  });

  return response.json(post);
});

postsRouter.put('/:id', (request, response) => {
  const { id } = request.params;
  const { content } = request.body;

  const updatePost = new UpdatePostService();

  const post = updatePost.execute({
    post_id: id,
    content,
  });

  return response.json(post);
});

postsRouter.delete('/:id', (request, response) => {
  const { id } = request.params;

  const deletePost = new DeletePostService();

  deletePost.execute({
    post_id: id,
  });

  return response.send({ msg: 'Post deleted' });
});

// Handle likes on a post
postsRouter.post('/:id/like', (request, response) => {
  const { id } = request.params;

  const addLikeToPost = new AddLikeToPostService();

  const postWithOneMoreLike = addLikeToPost.execute({
    post_id: id,
  });

  return response.json(postWithOneMoreLike);
});

postsRouter.delete('/:id/like', (request, response) => {
  const { id } = request.params;

  const deleteLikeFromPost = new DeleteLikeFromPostService();

  const post = deleteLikeFromPost.execute({
    post_id: id,
  });

  return response.json(post);
});

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
