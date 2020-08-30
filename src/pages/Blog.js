import getUserBlog from '../utils/getUserBlog';

const Blog = async () => {
  const users = await getUserBlog();
  const view = `
  <section class='container__blog'>
    ${users.map((user) => `
      <div class='blog'>
        <div class='blog__avatar'>
          <a href='/'>
            <img src=${user.avatar} />
          </a>
        </div>
        <div class='blog__content'>
          <h3>${user.firstName}</h3>
          <span>Numero de Posts: ${user.posts.length}</span>
          <a href='#/user/${user.id}'>Ver Posts</a>
        </div>
      </div>
      `).join('')}
  </section>
  `;
  return view;
};

export default Blog;
