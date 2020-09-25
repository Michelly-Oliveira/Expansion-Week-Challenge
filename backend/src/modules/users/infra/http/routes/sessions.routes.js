const Router = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const SessionsController = require('../controllers/SessionsController');

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  sessionsController.create,
);

module.exports = sessionsRouter;
