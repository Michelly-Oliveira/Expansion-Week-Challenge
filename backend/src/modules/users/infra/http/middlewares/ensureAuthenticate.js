const { verify } = require('jsonwebtoken');

const authConfig = require('../../../../../config/auth');
const AppError = require('../../../../../shared/errors/AppError');

const ensureAuthenticated = (request, response, next) => {
  // Get token from header: Bearer token
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token missing', 401);
  }

  // Get only the value of the token (Bearer tokenValue)
  const [, token] = authHeader.split(' ');

  try {
    const decodedToken = verify(token, authConfig.jwt.secret);

    // Get user.id from token
    const { sub } = decodedToken;

    // Add id of logged user to the request object
    request.user = {
      id: sub,
    };

    // Continue program execution
    return next();
  } catch (err) {
    throw new AppError('Invalid JWT token', 401);
  }
};

module.exports = ensureAuthenticated;
