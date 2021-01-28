const router = require('express').Router();
const sequelize = require('../config/connection');
const {  User, Hours , Project } = require('../models');

router.get('/', (req, res) => {
  console.log('======================');
  Hours.findAll({
    attributes: [
      'user_id',
      [sequelize.literal('(SELECT COUNT(*) FROM hours WHERE hours.id = hours_id)'), 'hours_count']
    ],
    include: [
      {
        model: Project,
        attributes: ['user_id', 'date_started', 'date_ended'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
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
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


module.exports = router;
