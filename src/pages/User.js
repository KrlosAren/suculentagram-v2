import getId from '../utils/getId';
import getBlog from '../utils/getUserBlog';
import Post from './Posts';

const User = async () => {
  const { idUser } = getId();
  const user = await getBlog(idUser);
  const view = `
  <div class='user'>
    <div class='user__avatar'>
      <span class='user__avatar--img'>
        <img src='${user.avatar}'>
      </span>
      <span class='user__avatar--info'>
        <h1>${user.firstName} ${user.lastName}</h1>
        <h3>@${user.twitter}</h3>
      </span>
    </div>
    <div class='user__posts'>
      ${Post(user.posts, idUser)}
    </div>
  </div>
  `;
  return view;
};

export default User;
