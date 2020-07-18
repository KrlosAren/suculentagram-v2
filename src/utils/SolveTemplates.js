import routes  from '../utils/Routes.js'


const solveTemplate = (route) => {
  const template = routes.find( template => template.path === route[0])

  return  template || null
}
export default solveTemplate;