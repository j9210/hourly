const router = require('express').Router();

const apiRoutes = require('./api/index.js');
const homeRoutes = require('home-routes.js');
const newLocal = 'dashboard-routes.js';
const dashboardRoutes = require(newLocal);

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;
