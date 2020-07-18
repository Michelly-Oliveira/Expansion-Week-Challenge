const Router = require('express');
const { uuid } = require('uuidv4');

const postsRouter = Router();

const posts = [];

// POST http://localhost:3333/posts
postsRouter.get('/', (request, response) => {
  return response.json(posts);
});

postsRouter.post('/', (request, response) => {
  const { content } = request.body;

  const post = {
    id: uuid(),
    content,
  };

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

  const newPost = {
    id,
    content,
  };

  posts[findPostIndex] = newPost;

  return response.json(newPost);
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

module.exports = postsRouter;
