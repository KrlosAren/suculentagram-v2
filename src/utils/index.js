import Header from '../templates/Header';
import Footer from '../templates/Footer';
import getCurrentUrl from './getCurrentUrl';
import resolveRoutes from './ResolvesRoutes';
import solveTemplate from './SolveTemplates';
import Text from '../templates/Text';
import Error404 from '../templates/Error404';
import Spinner from '../templates/Spinner';

import '../styles/scss/main.scss';

const router = async () => {
  const app = document.getElementById('app');
  const hash = getCurrentUrl();
  const route = resolveRoutes(hash);
  const render = solveTemplate(route);

  /// resolve render elements in DOM, can better
  if (render.path === '#/successfull' || render.path === '#/failed') {
    app.innerHTML = [await render.template()].join(' ');
  } else if (render.path === '#/:id' || render.path === '#/payment' || render.path === '#/details' || render.path === '#/blog' || render.path === '#/user') {
    app.innerHTML = [Header(), await render.template(), Footer()].join(' ');
  } else if (render.path === '#/' || render.path === '#/products') {
    app.innerHTML = [Header(), Text(), await render.template(), Footer()].join('');
  } else {
    app.innerHTML = [Error404()];
  }
};

export default router;
