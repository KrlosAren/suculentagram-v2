
import getData from './getData';

const cacheData = async () => {
  if (window.sessionStorage.length !== 0) {
    const plantsList = window.sessionStorage.getItem('listPlants');
    return JSON.parse(plantsList);
  }
  const plantsList = await getData();
  window.sessionStorage.setItem('listPlants', JSON.stringify(plantsList));
  return plantsList;

};
export default cacheData;
