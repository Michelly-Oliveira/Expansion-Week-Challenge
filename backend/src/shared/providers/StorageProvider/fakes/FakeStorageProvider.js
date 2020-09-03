class FakeStorageProvider {
  storage = [];

  async saveFile(file) {
    this.storage.push(file);

    return file;
  }

  async deleteFile(file) {
    const findIndex = this.storage.findIndex(
      storageFile => storageFile === file,
    );

    this.storage.splice(findIndex, 1);
  }
}

module.exports = FakeStorageProvider;
