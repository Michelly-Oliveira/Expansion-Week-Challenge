class ListPostsService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute({ user_id }) {
    try {
      const userPosts = await this.postsRepository.list(user_id);

      return userPosts;
    } catch (err) {
      return err;
    }
  }
}

module.exports = ListPostsService;
