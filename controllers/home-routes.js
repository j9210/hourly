const router = require('express').Router();
const sequelize = require('../config/connection');
const {  User, Hours , Project } = require('../models');

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
  //  {
  //   // res.redirect('/');
  //   // return;
  // }

  res.render('login');
});


module.exports = router;