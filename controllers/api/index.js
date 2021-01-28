const router = require('express').Router();

const projectRoutes = require('./project-routes');
const hoursRoutes = require('./hours-routes');
const userRoutes = require('./user-routes')

router.use('/project', projectRoutes);
router.use('/hours', hoursRoutes);
router.use('/users', userRoutes);

module.exports = router;