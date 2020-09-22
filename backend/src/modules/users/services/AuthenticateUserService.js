const { sign } = require('jsonwebtoken');

const authConfig = require('../../../config/auth');
const AppError = require('../../../shared/errors/AppError');

class AuthenticateUserService {
  constructor(usersRepository, hashProvider) {
    this.usersRepository = usersRepository;
    this.hashProvider = hashProvider;
  }

  async execute({ email, password }) {
    try {
      const user = await this.usersRepository.findByEmail(email);

      if (!user) {
        throw new AppError('Incorrect email/password combination', 401);
      }

      const passwordMatched = await this.hashProvider.compareHash(
        password,
        user.password,
      );

      if (!passwordMatched) {
        console.log('hry');

        throw new AppError('Incorrect email/password combination', 401);
      }

      const { expiresIn } = authConfig.jwt;

      // Create JWT token containing the id of the user logged and expiration time
      const token = sign({}, String(process.env.APP_SECRET), {
        subject: user.id,
        expiresIn,
      });

      return {
        user,
        token,
      };
    } catch (err) {
      return err;
    }
  }
}

module.exports = AuthenticateUserService;
