const sequelize = require('../../../../../shared/infra/sequelize');
const Post = require('../models/Post');

class PostsRepository {
  async create(post) {
    const createPost = await Post.create(post);

    return createPost;
  }

  async save(post) {
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

  async addLike(post, user_id) {
    await Post.update(
      {
        likes: sequelize.fn('array_append', sequelize.col('likes'), user_id),
      },
      { where: { id: post.id } },
    );

    return post;
  }

  // async removeLike(post, user_id) {
  //   post.comments.splice(comment_index, 1);

  //   await Post.update(
  //     {
  //       likes: sequelize.fn(
  //         'array_append',
  //         sequelize.col('likes'),
  //         user_id,
  //       ),
  //     },
  //     { where: { id: post.id } },
  //   );

  //   return post;
  // }

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
