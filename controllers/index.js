const router = require('express').Router();
//collects packaged group of api endpoints 
const apiRoutes = require('./api/');

router.use('/api', apiRoutes);



module.exports = router;
