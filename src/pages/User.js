import getId from '../utils/getId';
import getUserBlog from '../utils/getUserBlog';
import Post from './Posts';

const User = async () => {
  const id = getId();
  const user = await getUserBlog(id);
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
      ${Post(user.posts)}
    </div>
  </div>
  `;
  return view;
};

export default User;
