const fs = require('fs');
const path = require('path');

import uploadConfig from '../../../../config/upload';

class DiskStorageProvider {
  async saveFile(file) {
    // Move uploaded files from the tmp folder to tmp/uploads
    await fs.promises.rename(
      // from
      path.resolve(uploadConfig.tmpFolder, file),
      // to
      path.resolve(uploadConfig.uploadsFolder, file),
    );

    return file;
  }

  async deleteFile(file) {
    const filePath = path.resolve(uploadConfig.uploadsFolder, file);

    try {
      // Check if the files exists
      await fs.promises.stat(filePath);
    } catch {
      return;
    }

    await fs.promises.unlink(filePath);
  }
}

module.exports = DiskStorageProvider;
