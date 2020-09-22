const sequelize = require('../../../../../shared/infra/sequelize');
const User = require('../models/User');

class UsersRepository {
  async create(user) {
    const createUser = await User.create(user);

    return createUser;
  }

  async save(user) {
    await user.save();

    return user;
  }

  async updateFollowingArray(user, newFollowing) {
    await User.update(
      {
        following: sequelize.fn(
          'array_append',
          sequelize.col('following'),
          newFollowing,
        ),
      },
      { where: { id: user.id } },
    );

    return user;
  }

  async listAllUsers() {
    const users = await User.findAll();

    return users;
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
    const findId = await User.findByPk(id);

    return findId;
  }
}

const usersRepository = new UsersRepository();

module.exports = usersRepository;
