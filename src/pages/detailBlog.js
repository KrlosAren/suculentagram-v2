import getBlog from '../utils/getUserBlog';
import getId from '../utils/getId';
import paragraph from '../templates/paragraph';

const detailBlog = async () => {
  const { idUser, idPost } = getId();
  const { post, title } = await getBlog(idUser, idPost);
  const { avatar, firstName, lastName } = await getBlog(idUser);
  const view = `
  <div class='container__blog'>
    <div class='user__avatar'>
      <span class='user__avatar--img'>
        <img src='${avatar}'>
      </span>
      <span class='user__avatar--info'>
        <h1>${firstName} ${lastName}</h1>
      </span>
      <span>
        <a  class='link' href='#/user/${idUser}'>Regresar</a>
      </span>
    </div>
    <div>
      <h2 class='post__title'>${title}</h2>
      ${paragraph(post).join('')}
    </div>
  </div>
  `;
  return view;
};

export default detailBlog;
