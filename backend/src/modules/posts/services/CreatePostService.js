const { uuid } = require('uuidv4');

const postsRepository = require('../repositories/PostsRepository');

class CreatePostService {
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

    postsRepository.push(post);

    return post;
  }
}

function getCreationDate() {
  const date = new Date();

  const dayOfMonth = date.getDate();
  const numberOfMonth = date.getMonth();
  let month;

  switch (numberOfMonth) {
    case 0:
      month = 'Janeiro';
      break;
    case 1:
      month = 'Fevereiro';
      break;
    case 2:
      month = 'Março';
      break;
    case 3:
      month = 'Abril';
      break;
    case 4:
      month = 'Maio';
      break;
    case 5:
      month = 'Junho';
      break;
    case 6:
      month = 'Julho';
      break;
    case 7:
      month = 'Agosto';
      break;
    case 8:
      month = 'Setembro';
      break;
    case 9:
      month = 'Outubro';
      break;
    case 10:
      month = 'Novembro';
      break;
    case 11:
      month = 'Dezembro';
      break;
  }

  return `${dayOfMonth} de ${month}`;
}

module.exports = CreatePostService;
