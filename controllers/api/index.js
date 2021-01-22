const router = require('express').Router();

const projectRoutes = require('./project-routes.js');
const hoursRoutes = require('./hours-routes');

router.use('/projects', projectRoutes);
router.use('/hours', hoursRoutes);

module.exports = router;