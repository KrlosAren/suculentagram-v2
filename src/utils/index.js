import Header from        '../templates/Header.js'
import Footer from        '../templates/Footer.js'
import getCurrentUrl from './getCurrentUrl.js'
import resolveRoutes from './ResolvesRoutes.js'
import solveTemplate from './SolveTemplates.js'
import Navegator from '../utils/Navegator'

// import '../styles/css/main.css'
// import '../styles/css/payment.css'
// import '../styles/css/details.css'
// import '../styles/css/products.css'
// import '../styles/css/mainHome.css'
// import '../styles/css/animations.css'
// import '../styles/css/successfull.css'
// import '../styles/css/mediasQueries.css'

import '../styles/sass/main.scss'

const router = async () => {

const header = document.getElementById('header')
const navegator = document.getElementById('navegation')
const main = document.getElementById('main')
const footer = document.getElementById('footer')

header.innerHTML = await Header()
navegator.innerHTML = await Navegator()
footer.innerHTML = await Footer()

const hash = getCurrentUrl()
let route = await resolveRoutes(hash)


let render = await solveTemplate(route)
main.innerHTML = await render.template()

}





export default router;