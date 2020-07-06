const getHash = () => {

  debugger
  const hash = location.hash.slice(1).toLowerCase().split('/')[1] || '/';
  return hash;
}

export default getHash;
