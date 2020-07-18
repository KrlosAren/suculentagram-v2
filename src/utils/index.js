import Header from        '../templates/Header.js'
import Footer from        '../templates/Footer.js'
import getCurrentUrl from './getCurrentUrl.js'
import resolveRoutes from './ResolvesRoutes.js'
import solveTemplate from './SolveTemplates.js'
import Navegator from '../utils/Navegator'
import Text from '../templates/Text.js'

import '../styles/scss/main.scss'

const router = async () => {

const header = document.getElementById('header')
// const navegator = document.getElementById('navegation')
const main = document.getElementById('main')
const footer = document.getElementById('footer')

const app = document.getElementById('app')

// app.innerHTML= Header()
// header.innerHTML = await Header()
// navegator.innerHTML = await Navegator()
// footer.innerHTML = await Footer()

const hash = getCurrentUrl()
let route = await resolveRoutes(hash)


let render = await solveTemplate(route)
// main.innerHTML = await render.template()
app.innerHTML = [ await render.template()]
}

if(module.hot){
  module.hot.accept(function() {
    console.log('recargando en caliente')
    router()
  })
}





export default router;