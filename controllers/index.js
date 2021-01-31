const router = require('express').Router();

const apiRoutes = require('./api/index.js');
const homeRoutes = require('./home-routes.js');
//const newLocal = './dashboard-routes.js';
const dashboardRoutes = require('./dashboard-routes');

router.use('/', homeRoutes);
router.use('/', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;
