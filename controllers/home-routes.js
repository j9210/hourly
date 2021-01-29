const router = require('express').Router();
const sequelize = require('../config/connection');
const {  User, Hours , Project } = require('../models');

router.get('/', (req, res) => {
  console.log('======================');
  Hours.findAll({
    where: { user_id : }

    ,
    include: [
      {
        model: User,
        attributes: ['user_id', 'username','date_started', 'date_ended'],

      },
    ]
  })
    .then(dbhours => {
      const hours = dbhours.map(hours => hours.get({ plain: true }));

      res.render('homepage', {
        hours,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  //  {
  //   // res.redirect('/');
  //   // return;
  // }

  res.render('login');
});


module.exports = router;
