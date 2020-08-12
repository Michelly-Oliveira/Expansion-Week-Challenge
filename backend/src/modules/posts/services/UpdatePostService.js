class UpdatePostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  execute({ post_id, content }) {
    const findPostIndex = this.postsRepository.findIndex(
      post => post.id === post_id,
    );

    if (findPostIndex < 0) {
      throw new Error({ status: 404, error: 'Could not find post' });
    }

    this.postsRepository[findPostIndex].content = content;

    const updatedPost = this.postsRepository[findPostIndex];

    return updatedPost;
  }
}

module.exports = UpdatePostService;
