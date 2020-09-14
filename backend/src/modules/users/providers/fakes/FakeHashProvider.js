class FakeHashProvider {
  async generateHash(payload) {
    return payload;
  }

  async compareHash(payload, hashed) {
    return payload === hashed;
  }
}

const fakeHashProvider = new FakeHashProvider();

module.exports = fakeHashProvider;
