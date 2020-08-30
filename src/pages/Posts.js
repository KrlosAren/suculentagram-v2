const Post = (posts) => {
  // debugger;
  const view = `
  ${posts.map((content) => `
    <div class='post'>
      <h3 class='post__title'>
        ${content.title}
      </h3>
      <p class='post__content'>${content.post}</p>
    </div>
    `).join('')}
  `;
  return view;
};

export default Post;
