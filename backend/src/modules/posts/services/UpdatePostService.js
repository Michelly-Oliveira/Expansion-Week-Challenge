const AppError = require('../../../shared/errors/AppError');

class UpdatePostService {
  constructor(postsRepository, storageProvider) {
    this.postsRepository = postsRepository;
    this.storageProvider = storageProvider;
  }

  async execute({ post_id, content, user_id }) {
    const post = await this.postsRepository.findById(post_id);

    if (!post) {
      throw new AppError({ status: 404, error: 'Cannot find post' });
    }

    if (post.user_id !== user_id) {
      throw new AppError({
        status: 401,
        error: 'You do not have permission to edit this post',
      });
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

    post.content = content;

    const updatedPost = await this.postsRepository.save(post);

    return updatedPost;
  }
}

module.exports = UpdatePostService;
