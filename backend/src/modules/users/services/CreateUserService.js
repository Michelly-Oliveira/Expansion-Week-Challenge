const { uuid } = require('uuidv4');

const AppError = require('../../../shared/errors/AppError');

class CreateUserService {
  constructor(usersRepository, hashProvider) {
    this.usersRepository = usersRepository;
    this.hashProvider = hashProvider;
  }

  async execute({ email, password, name }) {
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

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      id: uuid(),
      name,
      email,
      password: hashedPassword,
      following: [],
      avatar: null,
      avatar_url: null,
    });

    return user;
  }
}

module.exports = CreateUserService;
