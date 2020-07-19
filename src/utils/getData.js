const API = `https://api.pexels.com/v1/`;
const URL_ = `search?query=succulents&per_page=16`
const API_KEY = '563492ad6f9170000100000153371c4354a14827a6bb089ac5454cd3';


const fetchData = async (id) => {
  const URL = id ? `${API}photos/${id}` : `${API}/${URL_}`
  const response = await fetch(URL, {
    headers: {
      'authorization': API_KEY,
    },
  });
  try{
    const data = await response.json()
    return data
  }catch(error){
    console.error('Fetch Error', error)
  }
}

export default fetchData;