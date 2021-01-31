  
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Hours, User, Project,  } = require('../models');
// const { findAll } = require('../models/user');
// const withAuth = require("../utils/auth");
router.get('/', (req, res) => {
 Project.findAll({
  where: {
    user_id: req.session.user_id
  }
})
  .then(dbProjectData => {
    const projects = dbProjectData.map(project => project.get({ plain: true }));
      res.render('dashboard', { projects, loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.get('/hours', (req, res) => {
  Hours.findAll({
    where: {
      project_id: req.session.project_id
    }
  })
  .then(dbHoursData => {
    const hours = dbHoursData.map(hours => hours.get({ plain: true }));
    res.render('hours', { hours, loggedIn: true })
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})
module.exports = router;
