
const getId = () => {
  const id = window.location.hash.split('/').slice(2);
  const result = id.length > 1 ? { idUser: id[0], idPost: id[2] } : { idUser: id[0] };
  return result;
};

export default getId;
