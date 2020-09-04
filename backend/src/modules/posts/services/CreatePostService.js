const { uuid } = require('uuidv4');
const { format } = require('date-fns');
const ptBR = require('date-fns/locale/pt-BR');

class CreatePostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute({ user_id, content }) {
    try {
      const date = getCreationDate();

      const post = {
        id: uuid(),
        content,
        date,
        comments: [],
        likes: 0,
        user_id,
      };

      await this.postsRepository.create(post);

      return post;
    } catch (err) {
      return err;
    }
  }
}

function getCreationDate() {
  // 12 of August
  // Maybe after we have a database use date in timestamp format
  const date = format(Date.now(), "dd 'de' MMMM", { locale: ptBR });

  return date;
}

module.exports = CreatePostService;
