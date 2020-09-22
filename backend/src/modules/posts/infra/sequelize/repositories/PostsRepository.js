const sequelize = require('../../../../../shared/infra/sequelize');
const Post = require('../models/Post');

class PostsRepository {
  async create(post) {
    const createPost = await Post.create(post);

    return createPost;
  }

  async saveContent(post, content) {
    post.content = content;

    await post.save();

    return post;
  }

  async findById(post_id) {
    const post = await Post.findByPk(post_id);

    return post;
  }

  async delete(post) {
    await post.destroy();
  }

  async list(user_id) {
    const posts = await Post.findAll({
      where: {
        user_id,
      },
    });

    return posts;
  }

  async addLike(post) {
    post.likes++;

    await post.save();

    return post;
  }

  async removeLike(post) {
    if (post.likes > 0) {
      post.likes--;

      await post.save();
    }

    return post;
  }

  async addComment(post, newComment) {
    await Post.update(
      {
        comments: sequelize.fn(
          'array_append',
          sequelize.col('comments'),
          JSON.stringify(newComment),
        ),
      },
      { where: { id: post.id } },
    );

    return post;
  }

  async removeComment(post, comment_index) {
    post.comments.splice(comment_index, 1);

    await Post.update(
      {
        comments: [...post.comments],
      },
      {
        where: { id: post.id },
      },
    );

    return post;
  }
}

const postsRepository = new PostsRepository();

module.exports = postsRepository;
