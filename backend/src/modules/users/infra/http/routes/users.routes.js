const Router = require('express');
const multer = require('multer');
const { celebrate, Segments, Joi } = require('celebrate');

const uploadConfig = require('../../../../../config/upload');
const ensureAuthenticated = require('../middlewares/ensureAuthenticate');

const UsersController = require('../controllers/UsersController');
const UserAvatarController = require('../controllers/UserAvatarController');
const FollowingUsersController = require('../controllers/FollowingUsersController');
const UserFollowersController = require('../controllers/UserFollowersController');

const usersRouter = Router();
const upload = multer(uploadConfig);

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();
const followingUsersController = new FollowingUsersController();
const userFollowersController = new UserFollowersController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

usersRouter.use(ensureAuthenticated);

usersRouter.patch(
  '/avatar',
  upload.single('avatar'),
  userAvatarController.update,
);

usersRouter.post('/following', followingUsersController.create);

usersRouter.delete('/following', followingUsersController.delete);

usersRouter.get('/followers', userFollowersController.index);

module.exports = usersRouter;
