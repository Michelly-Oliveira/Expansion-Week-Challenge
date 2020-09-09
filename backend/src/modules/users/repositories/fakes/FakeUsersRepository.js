class FakeUsersRepository {
  constructor() {
    this.users = [];
  }

  async create(user) {
    // Create a new User object - need a User model
    this.users.push(user);
  }

  async save(user) {
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id);

    this.users[findIndex] = user;

    return user;
  }

  async findByIndex(user_id) {
    const findUserIndex = this.users.findIndex(user => user.id === user_id);

    return findUserIndex;
  }

  async findByEmail(email) {
    const findEmail = this.users.find(user => user.email === email);

    return findEmail;
  }

  async findById(id) {
    const findId = this.users.find(user => user.id === id);

    return findId;
  }

  async findByName(name) {
    const findName = this.users.find(user => user.name === name);

    return findName;
  }
}

const fakeUsersRepository = new FakeUsersRepository();

module.exports = fakeUsersRepository;
