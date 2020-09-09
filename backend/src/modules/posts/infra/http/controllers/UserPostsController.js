const ListUserPostsService = require('../../../services/ListUserPostsService');
const UpdatePostService = require('../../../services/UpdatePostService');
const DeletePostService = require('../../../services/DeletePostService');

const postsRepository = require('../../../repositories/fakes/FakePostsRepository');
const usersRepository = require('../../../../users/repositories/fakes/FakeUsersRepository');

class UserPostsController {
  // List all posts of a specific user
  async index(request, response) {
    const { id } = request.params;

    const listUserPosts = new ListUserPostsService(
      postsRepository,
      usersRepository,
    );

    const posts = await listUserPosts.execute({ user_id: id });

    return response.json(posts);
  }

  async update(request, response) {
    // post id
    const { id } = request.params;
    const { content } = request.body;

    const updatePost = new UpdatePostService(postsRepository);

    const post = await updatePost.execute({
      post_id: id,
      content,
    });

    return response.json(post);
  }

  async delete(request, response) {
    const { id } = request.params;

    const deletePost = new DeletePostService(postsRepository);

    await deletePost.execute({
      post_id: id,
    });

    return response.send({ msg: 'Post deleted' });
  }
}

module.exports = UserPostsController;
