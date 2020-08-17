import routes  from '../utils/Routes.js'


const solveTemplate = (route) => {
  const template = routes.find( template => template.path === route[0])
  return template || 'error404'
}
export default solveTemplate;