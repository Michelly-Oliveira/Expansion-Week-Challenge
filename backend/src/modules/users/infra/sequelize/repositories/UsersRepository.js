const User = require('../models/User');

class UsersRepository {
  async create(user) {
    const createUser = await User.create(user);

    return createUser;
  }

  async save(user) {
    const updateUser = await User.save(user);

    return updateUser;
  }

  async findByIndex(user_id) {
    const users = await User.findAll();

    const findUserIndex = users.findIndex(user => user.id === user_id);

    return findUserIndex;
  }

  async findByEmail(email) {
    const findEmail = await User.findOne({
      where: {
        email,
      },
    });

    return findEmail;
  }

  async findByName(name) {
    const findName = await User.findOne({
      where: {
        name,
      },
    });

    return findName;
  }

  async findById(id) {
    const findId = await Users.findByPk(id);

    return findId;
  }
}

const usersRepository = new UsersRepository();

module.exports = usersRepository;
