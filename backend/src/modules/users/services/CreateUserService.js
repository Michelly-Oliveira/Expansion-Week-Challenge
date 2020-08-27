const { uuid } = require('uuidv4');

const AppError = require('../../../shared/errors/AppError');

class CreateUserService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  execute({ email, password, name }) {
    // Check if email is already used
    const findEmail = this.usersRepository.find(user => user.email === email);

    if (findEmail) {
      throw new AppError('Email already used');
    }

    // Check if name is already used
    const findName = this.usersRepository.find(user => user.name === name);

    if (findName) {
      throw new AppError('Name already used');
    }

    const user = {
      id: uuid(),
      email,
      password,
      name,
    };

    this.usersRepository.push(user);

    return user;
  }
}

module.exports = CreateUserService;
