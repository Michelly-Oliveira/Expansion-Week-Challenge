const Router = require('express');

const postsRouter = require('./posts.routes');

const routes = Router();

// Pass the path '/posts' to all the requests inside the postsRouter
routes.use('/posts', postsRouter);

module.exports = routes;
