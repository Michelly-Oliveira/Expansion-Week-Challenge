const ListUserPostsService = require('../../../services/ListUserPostsService');
const UpdatePostService = require('../../../services/UpdatePostService');
const DeletePostService = require('../../../services/DeletePostService');

const storageProvider = require('../../../../../shared/providers/StorageProvider/implementations/DiskStorageProvider');
const postsRepository = require('../../sequelize/repositories/PostsRepository');
const usersRepository = require('../../../../users/infra/sequelize/repositories/UsersRepository');

class UserPostsController {
  // List all posts of a specific user
  async index(request, response) {
    const { id } = request.user;

    const listUserPosts = new ListUserPostsService(
      usersRepository,
      postsRepository,
    );

    const posts = await listUserPosts.execute({ user_id: id });

    return response.json(posts);
  }

  async update(request, response) {
    // post id
    const { id } = request.params;
    const { text } = request.body;
    const images = request.files;

    const content_images = images.map(image => image.filename);
    const content_text = text ? JSON.parse(text).content_text : '';

    const updatePost = new UpdatePostService(postsRepository, storageProvider);

    const post = await updatePost.execute({
      post_id: id,
      content: {
        content_text,
        content_images,
      },
    });

    return response.json(post);
  }

  async delete(request, response) {
    const { id } = request.params;

    const deletePost = new DeletePostService(postsRepository);

    await deletePost.execute({
      post_id: id,
    });

    return response.json(deletePost);
  }
}

module.exports = UserPostsController;
