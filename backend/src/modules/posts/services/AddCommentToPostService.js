const { uuid } = require('uuidv4');

const AppError = require('../../../shared/errors/AppError');

class AddCommentToPostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute({ post_id, content, user_id }) {
    try {
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

      const postToAddComment = await this.postsRepository.addComment(
        post,
        comment,
      );

      post.comments.push(comment);

      return postToAddComment;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}

module.exports = AddCommentToPostService;
