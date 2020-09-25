const { uuid } = require('uuidv4');

const AppError = require('../../../shared/errors/AppError');

class AddCommentToPostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute({ post_id, content, user_id }) {
    const post = await this.postsRepository.findById(post_id);

    if (!post) {
      throw new AppError({
        status: 404,
        error: 'Cannot add comment to non-existing post',
      });
    }

    const comment = {
      id: uuid(),
      content,
      author: user_id,
    };

    // Add comment to database
    const postWithNewComment = await this.postsRepository.addComment(
      post,
      comment,
    );

    // Add comment locally - otherwise need to make another call to the database to display the newly added comment
    post.comments.push(comment);

    return postWithNewComment;
  }
}

module.exports = AddCommentToPostService;
