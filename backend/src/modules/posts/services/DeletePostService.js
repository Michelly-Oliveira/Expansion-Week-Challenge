class DeletePostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  execute({ post_id }) {
    const findPostIndex = this.postsRepository.findIndex(
      post => post.id === post_id,
    );

    if (findPostIndex < 0) {
      throw new Error({ status: 404, error: 'Could not find post' });
    }

    this.postsRepository.splice(findPostIndex, 1);
  }
}

module.exports = DeletePostService;