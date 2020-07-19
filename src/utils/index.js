import Header from '../templates/Header.js'
import Footer from '../templates/Footer.js'
import getCurrentUrl from './getCurrentUrl.js'
import resolveRoutes from './ResolvesRoutes.js'
import solveTemplate from './SolveTemplates.js'
import Error404 from '../templates/Error404'
import Text from '../templates/Text.js'

import '../styles/scss/main.scss'

const router = async () => {
  const app = document.getElementById('app')
  const hash = getCurrentUrl()
  let route = await resolveRoutes(hash)
  let render = solveTemplate(route)
  console.log(render)

  /// resolve render elements in DOM, can better
  if (render.path === '#/successfull' || render.path === '#/failed') {
    app.innerHTML = [await render.template()]
  } else if (render.path === '#/:id' || render.path === '#/payment' || render.path === '#/details') {
    app.innerHTML = [Header(), await render.template(), Footer()]
  } else if (render.path === '#/' || render.path === '#/products') {
    app.innerHTML = [Header(), Text(), await render.template(), Footer()]
  } else {
    app.innerHTML = [Error404()]
  }

}


if (module.hot) {
  module.hot.accept(function () {
    console.log('hot reload')
    router()
  })
}





export default router;