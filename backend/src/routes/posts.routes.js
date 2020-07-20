const Router = require('express');
const { uuid } = require('uuidv4');

const postsRouter = Router();

const CreatePostService = require('../services/posts/CreatePostService');

const posts = [];

// http://localhost:3333/posts
postsRouter.get('/', (request, response) => {
  return response.json(posts);
});

// User must be authenticated to be able to interact with posts: create a middleware to ensure the user is authenticated
postsRouter.post('/', (request, response) => {
  const { content } = request.body;

  const createPost = new CreatePostService();

  const post = createPost.execute({
    user_id: 'whoWroteThePost_Id',
    content,
  });

  posts.push(post);

  return response.json(post);
});

postsRouter.put('/:id', (request, response) => {
  const { id } = request.params;
  const { content } = request.body;

  const findPostIndex = posts.findIndex(post => post.id === id);

  if (findPostIndex < 0) {
    return response.status(400).json({ error: 'Could not find post' });
  }

  posts[findPostIndex].content = content;

  return response.json(posts[findPostIndex]);
});

postsRouter.delete('/:id', (request, response) => {
  const { id } = request.params;

  const findPostIndex = posts.findIndex(post => post.id === id);

  if (findPostIndex < 0) {
    return response.status(400).json({ error: 'Could not find post' });
  }

  posts.splice(findPostIndex, 1);

  return response.send({ msg: 'Post deleted' });
});

postsRouter.post('/:id/like', (request, response) => {
  const { id } = request.params;

  const findPost = posts.findIndex(post => post.id === id);

  if (findPost < 0) {
    return response.status(400).json({ error: 'Could not find post' });
  }

  posts[findPost].likes++;

  return response.json(posts[findPost]);
});

postsRouter.delete('/:id/like', (request, response) => {
  const { id } = request.params;

  const findPost = posts.findIndex(post => post.id === id);

  if (findPost < 0) {
    return response.status(400).json({ error: 'Could not find post' });
  }

  if (posts[findPost].likes > 0) {
    posts[findPost].likes--;
  }

  return response.json(posts[findPost]);
});

postsRouter.post('/:id/comment', (request, response) => {
  const { id } = request.params;
  const { content } = request.body;

  const findPost = posts.findIndex(post => post.id === id);

  if (findPost < 0) {
    return response.status(400).json({ error: 'Could not find post' });
  }

  const comment = {
    id: uuid(),
    content,
    author: 'Who wrote the comment',
  };

  posts[findPost].comments.push(comment);

  return response.json(posts[findPost]);
});

postsRouter.delete('/:id/comment/:comment_id', (request, response) => {
  const { id, comment_id } = request.params;

  const findPost = posts.findIndex(post => post.id === id);

  if (findPost < 0) {
    return response.status(400).json({ error: 'Could not find post' });
  }

  const findComment = posts[findPost].comments.findIndex(
    comment => comment.id === comment_id,
  );

  posts[findPost].comments.splice(findComment, 1);

  return response.send({ msg: 'Comment removed' });
});

module.exports = postsRouter;
