const Router = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const ensureAuthenticated = require('../middlewares/ensureAuthenticate');

const ProfileController = require('../controllers/ProfileController');

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(ensureAuthenticated);

profileRouter.get('/', profileController.show);

profileRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
      email: Joi.string().email(),
      old_password: Joi.string(),
      password: Joi.string(),
      password_confirmation: Joi.string().valid(Joi.ref('password')),
    },
  }),
  profileController.update,
);

module.exports = profileRouter;
