const paragraph = (text) => {
  const view = [];
  for (let i = 0; i < text.length; i++) {
    view.push(`<p class='post__content'>${text[i]}</p>`);
  }

  return view;
};

export default paragraph;
