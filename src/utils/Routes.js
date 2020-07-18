import Main from           '../pages/Main.js'
import Products from       '../pages/Products.js'
import Details from        '../pages/Details.js'
import Payment from        '../pages/Payment.js'
import Successfull from    '../templates/Successfull.js'
import Failed from    '../templates/Failed.js'


const routes = [
  {
    path: '/',
    template: Main
  },
  {
    path: '/products',
    template: Products
  },
  {
    path: '/details',
    template: Details
  },
  {
    path: '/payment',
    template: Payment
  },
  {
    path: '/:id',
    template: Details
  },
  {
    path: '/successfull',
    template: Successfull
  },
  {
    path: '/failed',
    template: Failed
  },
]

export default routes;