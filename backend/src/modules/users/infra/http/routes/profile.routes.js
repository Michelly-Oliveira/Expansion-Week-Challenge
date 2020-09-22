const Router = require('express');

const ensureAuthenticated = require('../middlewares/ensureAuthenticate');
const profileRouter = Router();

const ProfileController = require('../controllers/ProfileController');

const profileController = new ProfileController();

profileRouter.get('/:id', profileController.show);

profileRouter.put('/', ensureAuthenticated, profileController.update);

module.exports = profileRouter;
