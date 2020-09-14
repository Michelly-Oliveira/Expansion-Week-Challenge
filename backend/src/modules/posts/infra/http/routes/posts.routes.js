const Router = require('express');
const multer = require('multer');

const uploadConfig = require('../../../../../config/upload');
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

postsRouter.get('/', userPostsControllers.index);

// User must be authenticated to be able to interact with posts: create a middleware to ensure the user is authenticated
postsRouter.post('/', upload.array('images'), postsControllers.create);

postsRouter.put('/:id', userPostsControllers.update);

postsRouter.delete('/:id', userPostsControllers.delete);

postsRouter.post('/:id/likes', likesControllers.create);

postsRouter.delete('/:id/likes', likesControllers.delete);

postsRouter.post('/:id/comments', commentsControllers.create);

postsRouter.delete('/:id/comments/:comment_id', commentsControllers.delete);

postsRouter.get('/:id/comments', commentsControllers.index);

module.exports = postsRouter;
