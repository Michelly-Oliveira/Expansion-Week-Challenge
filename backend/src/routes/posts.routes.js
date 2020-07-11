const Router = require('express');

const postsRouter = Router();

// POST http://localhost:3333/posts
postsRouter.post('/', (request, response) => {
  console.log(request.body);
});

module.exports = postsRouter;
