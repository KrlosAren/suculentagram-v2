import getData from '../utils/getData'

const getPhotoFromCache = async (photoid) => {
  const storage = window.sessionStorage
  if(storage.length !== 0) {
    const data = await JSON.parse(window.sessionStorage.getItem('listPlants')).photos
    const photo =  await data.find( ({id}) => id === parseInt(photoid) )
    return photo
  }else {
    const plant = await getData(photoid);
    return plant
  }
}


export default getPhotoFromCache;