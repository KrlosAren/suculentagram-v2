import routes from './Routes';

const resolveRoutes = (currentUrlSegs) => {
  // previous check route
  const id = new RegExp(':id/[0-9]{1,}');
  const payment = new RegExp('payment/[0-9]{1,}');
  const user = new RegExp('user/[0-9A-Za-z]');

  const currentUrl = id.test(currentUrlSegs) ? '#/:id'.split(' ') :
    payment.test(currentUrlSegs) ? '#/payment'.split(' ') :
      user.test(currentUrlSegs) ? '#/user'.split(' ') :
        `#${currentUrlSegs}`.split(' ');

  routes.find((route) => {
    const availableRoute = route.path.split(' ');
    if (availableRoute.length !== currentUrl.length) {
      return Error404;
    }

    return availableRoute.every((routePath, i) => {
      routePath === currentUrl[i];
    });
  });

  return currentUrl;
};

export default resolveRoutes;
