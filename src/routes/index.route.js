const express = require('express');

const router = express.Router();

const userRoute = require('./user.route');
const adminRoute = require('./admin.route');


const defaultRoutes = [
   
    {
      path: '/user',
      route: userRoute
    },
    {
      path: '/admin',
      route: adminRoute
    },
    
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
