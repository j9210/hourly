const router = require('express').Router();
const sequelize = require('../config/connection');
const {  User, Hours , Project } = require('../models');

router.get('/', (req, res) => {
  console.log('======================');
  Project.findAll({
    where: { user_id : req.session.user_id}

    ,
    include: [
      {
        model: User,
        attributes: ['id', 'username'],

      },
    ]
  })
    .then(dbprojects => {
      const projects = dbprojects.map(projects => projects.get({ plain: true }));

      res.render('homepage', {
        projects,
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
