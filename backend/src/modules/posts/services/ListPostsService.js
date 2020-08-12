class ListPostsService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  execute({ user_id }) {
    const userPosts = this.postsRepository.filter(
      post => post.user_id === user_id,
    );

    return userPosts;
  }
}

module.exports = ListPostsService;
