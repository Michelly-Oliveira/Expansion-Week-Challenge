const { uuid } = require('uuidv4');

class AddCommentToPostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  execute({ post_id, content }) {
    const findPostIndex = this.postsRepository.findIndex(
      post => post.id === post_id,
    );

    if (findPostIndex < 0) {
      throw new Error({
        status: 404,
        error: 'Cannot add comment to non-existing post',
      });
    }

    const comment = {
      id: uuid(),
      content,
      author: 'Who wrote the comment',
    };

    const postToAddComment = this.postsRepository[findPostIndex];
    postToAddComment.comments.push(comment);

    return postToAddComment;
  }
}

module.exports = AddCommentToPostService;
