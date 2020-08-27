const Router = require('express');

const postsRouter = require('../../../../modules/posts/infra/http/routes/posts.routes');
const usersRouter = require('../../../../modules/users/infra/http/routes/users.routes');

const routes = Router();

// Pass the path '/posts' to all the requests inside the postsRouter
routes.use('/posts', postsRouter);
routes.use('/users', usersRouter);

module.exports = routes;
