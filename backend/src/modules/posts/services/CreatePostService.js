const { uuid } = require('uuidv4');
const { format } = require('date-fns');
const ptBR = require('date-fns/locale/pt-BR');

class CreatePostService {
  constructor(postsRepository, storageProvider) {
    this.postsRepository = postsRepository;
    this.storageProvider = storageProvider;
  }

  async execute({ user_id, content }) {
    try {
      const date = getCreationDate();

      if (content.content_images.length > 0) {
        // Save the images on storage
        const images = content.content_images;

        images.forEach(async image => {
          await this.storageProvider.saveFile(image);
        });

        // Create image url and add that to the post
        const imagesUrl = images.map(image => `http://localhost:3333/${image}`);

        content.content_images = imagesUrl;
      }

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
  const date = format(Date.now(), "dd 'de' MMMM", { locale: ptBR });

  return date;
}

module.exports = CreatePostService;
