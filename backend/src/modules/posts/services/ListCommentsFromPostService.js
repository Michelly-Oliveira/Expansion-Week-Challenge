class ListCommentsFromPostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  execute({ post_id }) {
    const findPostIndex = this.postsRepository.findIndex(
      post => post.id === post_id,
    );

    if (findPostIndex < 0) {
      throw new Error({
        status: 404,
        error: 'Cannot list comments from non-existing post',
      });
    }

    const comments = this.postsRepository[findPostIndex].comments;

    return comments;
  }
}

module.exports = ListCommentsFromPostService;
