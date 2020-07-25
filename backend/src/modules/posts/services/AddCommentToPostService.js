const { uuid } = require('uuidv4');

const postsRepository = require('../repositories/PostsRepository');

class AddCommentToPostService {
  execute({ post_id, content }) {
    const findPostIndex = postsRepository.findIndex(
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

    const postToAddComment = postsRepository[findPostIndex];
    postToAddComment.comments.push(comment);

    return postToAddComment;
  }
}

module.exports = AddCommentToPostService;
