
const Photo = (photo) => {
  return `
  <figure>
    <img src=${photo.src.landscape} srcset=${photo.src.landscape} alt="${photo.photographer}">
  </figure>
  `;
};

export default Photo;
