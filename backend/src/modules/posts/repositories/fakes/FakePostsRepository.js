class FakePostsRepository {
  posts = [];

  async create(post) {
    this.posts.push(post);
  }

  async saveContent(post_index, content) {
    const updatedPost = {
      ...this.posts[post_index],
      content,
    };

    this.posts[post_index] = updatedPost;

    return updatedPost;
  }

  async findByIndex(post_id) {
    const findPostIndex = this.posts.findIndex(post => post.id === post_id);

    return findPostIndex;
  }

  async delete(post_index) {
    this.posts.splice(post_index, 1);
  }

  async list(user_id) {
    const posts = this.posts.filter(post => post.user_id === user_id);

    return posts;
  }

  async addLike(post_index) {
    const post = this.posts[post_index];

    post.likes++;

    return post;
  }

  async removeLike(post_index) {
    const post = this.posts[post_index];

    if (post.likes > 0) {
      post.likes--;
    }
    return post;
  }

  async addComment(post_index, comment) {
    const post = this.posts[post_index];

    post.comments.push(comment);

    return post;
  }

  async removeComment(post_index, comment_index) {
    const post = this.posts[post_index];

    post.comments.splice(comment_index, 1);
  }

  async listComments(post_index) {
    const comments = this.postsRepository[post_index].comments;

    return comments;
  }
}

const fakePostsRepository = new FakePostsRepository();

module.exports = fakePostsRepository;
