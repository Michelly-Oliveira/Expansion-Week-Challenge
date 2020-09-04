const Router = require('express');
const multer = require('multer');

const uploadConfig = require('../../../../../config/upload');

const UsersController = require('../controllers/UsersController');
const UserAvatarController = require('../controllers/UserAvatarController');

const usersRouter = Router();
const upload = multer(uploadConfig);

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRouter.post('/', usersController.create);

// User must be authenticated
usersRouter.patch(
  '/avatar',
  upload.single('avatar'),
  userAvatarController.update,
);

module.exports = usersRouter;
