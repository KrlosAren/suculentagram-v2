
const getPhotoFromCache = async (photoid) => {
  const data = await JSON.parse(window.sessionStorage.getItem('listPlants')).photos
  const photo =  await data.find( ({id}) => id === parseInt(photoid) )
  return photo
}


export default getPhotoFromCache;