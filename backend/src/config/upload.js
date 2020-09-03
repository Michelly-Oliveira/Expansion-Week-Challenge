const path = require('path');
const crypto = require('crypto');
const multer = require('multer');

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  // Folder where the files go right after being submitted
  tmpFolder,
  // Folder the files go after they have been saved
  uploadsFolder: path.resolve(tmpFolder, 'uploads'),

  storage: multer.diskStorage({
    destination: tmpFolder,
    // Function to set the name of the file
    filename(request, file, callback) {
      // Add a has to the name of the file so that we don't have files with repeated names
      const fileHash = crypto.randomBytes(10).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
