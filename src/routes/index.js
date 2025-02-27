const express = require("express");

const userRoute = require("./user.routes");
const taskRoutes = require("./tasks.routes");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/tasks",
    route: taskRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
