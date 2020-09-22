const Router = require('express');
const multer = require('multer');

const uploadConfig = require('../../../../../config/upload');
const ensureAuthenticate = require('../../../../users/infra/http/middlewares/ensureAuthenticate');
const postsRouter = Router();

const PostsController = require('../controllers/PostsController');
const UserPostsController = require('../controllers/UserPostsController');

const LikesController = require('../controllers/LikesController');

const CommentsController = require('../controllers/CommentsController');

const postsControllers = new PostsController();
const userPostsControllers = new UserPostsController();
const likesControllers = new LikesController();
const commentsControllers = new CommentsController();

const upload = multer(uploadConfig);

postsRouter.use(ensureAuthenticate);

postsRouter.get('/', userPostsControllers.index);

postsRouter.post('/', upload.array('images'), postsControllers.create);

postsRouter.put('/:id', upload.array('images'), userPostsControllers.update);

postsRouter.delete('/:id', userPostsControllers.delete);

postsRouter.post('/:id/likes', likesControllers.create);

postsRouter.delete('/:id/likes', likesControllers.delete);

postsRouter.post('/:id/comments', commentsControllers.create);

postsRouter.delete('/:id/comments/:comment_id', commentsControllers.delete);

postsRouter.get('/:id/comments', commentsControllers.index);

module.exports = postsRouter;
