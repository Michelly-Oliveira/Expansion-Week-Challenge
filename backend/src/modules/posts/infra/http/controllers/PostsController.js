const CreatePostService = require('../../../services/CreatePostService');

const postsRepository = require('../../../repositories/fakes/FakePostsRepository');

class PostsController {
  async create(request, response) {
    const { content } = request.body;
    // While we don't have an user authenticated (will get its id from request.user.id), use a fixed user_id
    const user_id = 'who_wrote_the_post';

    const createPost = new CreatePostService(postsRepository);

    const post = await createPost.execute({ content, user_id });

    return response.json(post);
  }
}

module.exports = PostsController;
