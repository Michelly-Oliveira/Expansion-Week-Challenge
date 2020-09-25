const Router = require('express');
const multer = require('multer');
const { celebrate, Segments, Joi } = require('celebrate');

const uploadConfig = require('../../../../../config/upload');
const ensureAuthenticate = require('../../../../users/infra/http/middlewares/ensureAuthenticate');

const PostsController = require('../controllers/PostsController');
const UserPostsController = require('../controllers/UserPostsController');
const LikesController = require('../controllers/LikesController');
const CommentsController = require('../controllers/CommentsController');

const postsRouter = Router();
const upload = multer(uploadConfig);

const postsControllers = new PostsController();
const userPostsControllers = new UserPostsController();
const likesControllers = new LikesController();
const commentsControllers = new CommentsController();

postsRouter.use(ensureAuthenticate);

postsRouter.get('/', userPostsControllers.index);

postsRouter.post('/', upload.array('images'), postsControllers.create);

postsRouter.put(
  '/:post_id',
  celebrate({
    [Segments.PARAMS]: {
      post_id: Joi.string().uuid().required(),
    },
  }),
  upload.array('images'),
  userPostsControllers.update,
);

postsRouter.delete(
  '/:post_id',
  celebrate({
    [Segments.PARAMS]: {
      post_id: Joi.string().uuid().required(),
    },
  }),
  userPostsControllers.delete,
);

postsRouter.post(
  '/:post_id/likes',
  celebrate({
    [Segments.PARAMS]: {
      post_id: Joi.string().uuid().required(),
    },
  }),
  likesControllers.create,
);

postsRouter.delete(
  '/:post_id/likes',
  celebrate({
    [Segments.PARAMS]: {
      post_id: Joi.string().uuid().required(),
    },
  }),
  likesControllers.delete,
);

postsRouter.post(
  '/:post_id/comments',
  celebrate({
    [Segments.PARAMS]: {
      post_id: Joi.string().uuid().required(),
    },
  }),
  commentsControllers.create,
);

postsRouter.delete(
  '/:post_id/comments/:comment_id',
  celebrate({
    [Segments.PARAMS]: {
      post_id: Joi.string().uuid().required(),
      comment_id: Joi.string().uuid().required(),
    },
  }),
  commentsControllers.delete,
);

postsRouter.get(
  '/:post_id/comments',
  celebrate({
    [Segments.PARAMS]: {
      post_id: Joi.string().uuid().required(),
    },
  }),
  commentsControllers.index,
);

module.exports = postsRouter;
