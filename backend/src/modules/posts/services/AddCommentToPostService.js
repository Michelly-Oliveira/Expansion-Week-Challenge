const { uuid } = require('uuidv4');

const AppError = require('../../../shared/errors/AppError');

class AddCommentToPostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute({ post_id, content }) {
    try {
      const findPostIndex = await this.postsRepository.findByIndex(post_id);

      if (findPostIndex < 0) {
        throw new AppError({
          status: 404,
          error: 'Cannot add comment to non-existing post',
        });
      }

      const comment = {
        id: uuid(),
        content,
        author: 'Who wrote the comment',
      };

      const postToAddComment = await this.postsRepository.addComment(
        findPostIndex,
        comment,
      );

      return postToAddComment;
    } catch (err) {
      return err;
    }
  }
}

module.exports = AddCommentToPostService;
