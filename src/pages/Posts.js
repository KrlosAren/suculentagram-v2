
const Post = (posts, userId) => {
  const view = `
  ${posts.map(({ title, post, id }) => `
    <div class='post'>
      <h3 class='post__title'>
        ${title}
      </h3>
      <div>
        <p class='post__content'>${post[0]}</p>
      </div>
        <a class='link' href=#/user/${userId}/post/${id}>...Leer Más</a>
    </div>
    `).join('')}
  `;
  return view;
};

export default Post;
