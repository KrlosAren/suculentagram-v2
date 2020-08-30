const API = 'http://192.168.0.7:5000/users';

const getUserBlog = async (id) => {
  const URL_API = id ? `${API}/${id}` : API;
  try {
    const response = await fetch(URL_API);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

export default getUserBlog;
