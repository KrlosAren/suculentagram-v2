
const getId = () => {
  const id = window.location.hash.split('/').slice(1)
  return id[0]
}

export default getId;