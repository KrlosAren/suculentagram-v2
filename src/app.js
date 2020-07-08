import Header from        './templates/Header.js'
import Footer from        './templates/Footer.js'
import getCurrentUrl from '../src/utils/getCurrentUrl.js'
import resolveRoutes from '../src/utils/ResolvesRoutes.js'
import solveTemplate from './utils/SolveTemplates.js'

import './styles/main.css'
import './styles/payment.css'
import './styles/details.css'
import './styles/products.css'
import './styles/mainHome.css'
import './styles/animations.css'
import './styles/successfull.css'
import './styles/mediasQueries.css'

const router = async () => {

const header = document.getElementById('header')
const main = document.getElementById('main')
const footer = document.getElementById('footer')

header.innerHTML = await Header()
footer.innerHTML = await Footer()

const hash = getCurrentUrl()
let route = await resolveRoutes(hash)
debugger

let render = await solveTemplate(route)
// let render = Routes[route] ? Routes[route] : Error404;
main.innerHTML = await render.template()

}


export default router;