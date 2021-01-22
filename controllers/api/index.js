const router = require('express').Router();

const projectRoutes = require('./project-routes.js');
const hoursRoutes = require('./hours-routes');

router.use('/project', projectRoutes);
router.use('/hours', hoursRoutes);

module.exports = router;