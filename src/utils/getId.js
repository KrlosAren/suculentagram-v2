
const getId = () => {
  const id = window.location.hash.split('/').slice(2)
  return id[0]
}

export default getId;