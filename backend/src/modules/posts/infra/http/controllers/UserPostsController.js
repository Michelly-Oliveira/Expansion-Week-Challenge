const ListPostsService = require('../../../services/ListPostsService');
const UpdatePostService = require('../../../services/UpdatePostService');
const DeletePostService = require('../../../services/DeletePostService');

const postsRepository = require('../../../repositories/fakes/FakePostsRepository');

class UserPostsController {
  // List all posts of a specific user
  async index(request, response) {
    // for the moment will list all posts in the app
    const user_id = 'who_wrote_the_post';

    const listUserPosts = new ListPostsService(postsRepository);

    const posts = await listUserPosts.execute({ user_id });

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
