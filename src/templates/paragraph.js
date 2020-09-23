const paragraph = (text) => {
  debugger;
  const view = [];
  for (let i = 0; i < text.length; i++) {
    view.push(`<p class='post__content'>${text[i]}</p><br>`);
  }

  return view;
};

export default paragraph;
