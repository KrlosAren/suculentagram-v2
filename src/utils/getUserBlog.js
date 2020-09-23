const API = 'https://suculentagram-backend.herokuapp.com/users';

const getBlog = async (userId, postId) => {
  const URL_API = postId ? `${API}/${userId}/post/${postId}` :
    userId ? `${API}/${userId}` : API;
  try {
    const response = await fetch(URL_API);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

export default getBlog;
