const postsRepository = require('../repositories/PostsRepository');

// Later this service will list all posts from a specific user
class ListPostsService {
  execute() {
    return postsRepository;
  }
}

module.exports = ListPostsService;
