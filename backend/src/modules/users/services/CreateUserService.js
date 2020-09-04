const { uuid } = require('uuidv4');

const AppError = require('../../../shared/errors/AppError');

class CreateUserService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ email, password, name }) {
    try {
      // Check if email is already used
      const findEmail = await this.usersRepository.findByEmail(email);

      if (findEmail) {
        throw new AppError('Email already used');
      }

      // Check if name is already used
      const findName = await this.usersRepository.findByName(name);

      if (findName) {
        throw new AppError('Name already used');
      }

      const user = {
        id: uuid(),
        // id: 'user_id',
        email,
        password,
        name,
      };

      await this.usersRepository.create(user);

      return user;
    } catch (err) {
      return err;
    }
  }
}

module.exports = CreateUserService;
