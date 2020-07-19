import routes from "./Routes.js";

const resolveRoutes = (currentUrlSegs) => {
  // previous check route
  const id = new RegExp(":id/[0-9]{1,}");
  const payment = new RegExp("payment/[0-9]{1,}");

  let currentUrl = id.test(currentUrlSegs)
    ? "#/:id".split(" ")
    : payment.test(currentUrlSegs)
    ? "#/payment".split(" ")
    : `#${currentUrlSegs}`.split(" ");

  routes.find((route) => {
    const availableRoute = route.path.split(" ");
    if (availableRoute.length !== currentUrl.length) {
      return false;
    }

    return availableRoute.every((routePath, i) => {
      routePath === currentUrl[i];
    });
  });

  return currentUrl;
};

export default resolveRoutes;
