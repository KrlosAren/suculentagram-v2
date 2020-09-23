import Main from '../pages/Main';
import Products from '../pages/Products';
import Details from '../pages/Details';
import Payment from '../pages/Payment';
import Successfull from '../templates/Successfull';
import Blog from '../pages/Blog';
import detailBlog from '../pages/detailBlog';
import Comunidad from '../pages/Comunidad';
import User from '../pages/User';
import Failed from '../templates/Failed';
import Error404 from '../templates/Error404';

const routes = [
  {
    path: '#/',
    template: Main,
  },
  {
    path: '#/products',
    template: Products,
  },
  {
    path: '#/details',
    template: Details,
  },
  {
    path: '#/payment',
    template: Payment,
  },
  {
    path: '#/:id',
    template: Details,
  },
  {
    path: '#/successfull',
    template: Successfull,
  },
  {
    path: '#/blog',
    template: Blog,
  },
  {
    path: '#/post',
    template: detailBlog,
  },
  {
    path: '#/comunidad',
    template: Comunidad,
  },
  {
    path: '#/user',
    template: User,
  },
  {
    path: '#/failed',
    template: Failed,
  },
  {
    path: '#/error404',
    template: Error404,
  },
];

export default routes;
