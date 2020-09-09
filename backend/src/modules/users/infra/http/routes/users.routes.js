const Router = require('express');
const multer = require('multer');

const uploadConfig = require('../../../../../config/upload');

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

usersRouter.post('/', usersController.create);

// User must be authenticated
usersRouter.patch(
  '/avatar',
  upload.single('avatar'),
  userAvatarController.update,
);

usersRouter.post('/following/:id', followingUsersController.create);
usersRouter.delete('/following/:id', followingUsersController.delete);

usersRouter.get('/followers/:id', userFollowersController.index);

module.exports = usersRouter;
