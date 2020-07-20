import getData from '../utils/getData.js'


const cacheData = async () => {
  const plantsList = window.sessionStorage.getItem('listPlants')
  if (plantsList) {
    return JSON.parse(plantsList)
  } else {
    const plantsList = await getData();
    window.sessionStorage.setItem('listPlants', JSON.stringify(plantsList))
    return plantsList
  }
}
export default cacheData;