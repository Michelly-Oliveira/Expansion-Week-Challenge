const CreatePostService = require('../../../services/CreatePostService');

const storageProvider = require('../../../../../shared/providers/StorageProvider/implementations/DiskStorageProvider');
const postsRepository = require('../../sequelize/repositories/PostsRepository');

class PostsController {
  async create(request, response) {
    const { id } = request.user;
    const { text } = request.body;
    const images = request.files;

    const content_images = images.map(image => image.filename);
    const content_text = text ? JSON.parse(text).content_text : '';

    const createPost = new CreatePostService(postsRepository, storageProvider);

    const post = await createPost.execute({
      content: {
        content_text,
        content_images,
      },
      user_id: id,
    });

    return response.json(post);
  }
}

module.exports = PostsController;
