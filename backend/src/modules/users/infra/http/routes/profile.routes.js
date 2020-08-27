const Router = require('express');

const profileRouter = Router();

const ProfileController = require('../controllers/ProfileController');

const profileController = new ProfileController();

profileRouter.put('/', profileController.update);

module.exports = profileRouter;
