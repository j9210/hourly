const router = require('express').Router();

<<<<<<< HEAD
const apiRoutes = require('./api/index.js');
const homeRoutes = require('home-routes.js');
const newLocal = 'dashboard-routes.js';
const dashboardRoutes = require(newLocal);
=======
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
>>>>>>> 00ce84aca07946267f7872217fec260848cb3227

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;
