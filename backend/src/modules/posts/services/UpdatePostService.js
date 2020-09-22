const AppError = require('../../../shared/errors/AppError');

class UpdatePostService {
  constructor(postsRepository, storageProvider) {
    this.postsRepository = postsRepository;
    this.storageProvider = storageProvider;
  }

  async execute({ post_id, content }) {
    try {
      const post = await this.postsRepository.findById(post_id);

      if (!post) {
        throw new AppError({ status: 404, error: 'Could not find post' });
      }

      if (content.content_images.length > 0) {
        // Save the images on storage
        const images = content.content_images;

        images.forEach(async image => {
          await this.storageProvider.saveFile(image);
        });

        // Create image url and add that to the post
        const imagesUrl = images.map(image => `http://localhost:3333/${image}`);

        content.content_images = imagesUrl;
      }

      const updatedPost = await this.postsRepository.saveContent(post, content);

      return updatedPost;
    } catch (err) {
      return err;
    }
  }
}

module.exports = UpdatePostService;
