const Router = require('express');

const postsRouter = require('../../../../modules/posts/infra/http/routes/posts.routes');
const usersRouter = require('../../../../modules/users/infra/http/routes/users.routes');
const sessionsRouter = require('../../../../modules/users/infra/http/routes/sessions.routes');
const profileRouter = require('../../../../modules/users/infra/http/routes/profile.routes');

const routes = Router();

routes.use('/posts', postsRouter);

routes.use('/users', usersRouter);
routes.use('/session', sessionsRouter);
routes.use('/profile', profileRouter);

module.exports = routes;
