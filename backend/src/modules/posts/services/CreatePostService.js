const { uuid } = require('uuidv4');
const { format } = require('date-fns');
const ptBR = require('date-fns/locale/pt-BR');

class CreatePostService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }

  execute({ user_id, content }) {
    const date = getCreationDate();

    const post = {
      id: uuid(),
      content,
      date,
      comments: [],
      likes: 0,
      user_id,
    };

    this.postsRepository.push(post);

    return post;
  }
}

function getCreationDate() {
  // 12 of August
  // Maybe after we have a database use date in timestamp format
  const date = format(Date.now(), "dd 'de' MMMM", { locale: ptBR });

  return date;
}

module.exports = CreatePostService;
