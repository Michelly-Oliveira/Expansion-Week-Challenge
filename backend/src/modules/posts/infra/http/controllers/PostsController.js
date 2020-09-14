const CreatePostService = require('../../../services/CreatePostService');

const storageProvider = require('../../../../../shared/providers/StorageProvider/implementations/DiskStorageProvider');
const postsRepository = require('../../../repositories/fakes/FakePostsRepository');

class PostsController {
  async create(request, response) {
    const { text } = request.body;
    const images = request.files;

    const content_images = images.map(image => image.filename);
    const { content_text } = text ? JSON.parse(text) : '';

    // While we don't have an user authenticated (will get its id from request.user.id), use a fixed user_id
    const user_id = 'who_wrote_the_post';

    const createPost = new CreatePostService(postsRepository, storageProvider);

    const post = await createPost.execute({
      content: {
        content_text,
        content_images,
      },
      user_id,
    });

    return response.json(post);
  }
}

module.exports = PostsController;
