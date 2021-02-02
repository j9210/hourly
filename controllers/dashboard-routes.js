  
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Hours, User, Project,  } = require('../models');
const { findAll } = require('../models/user');
const withAuth = require("../utils/auth");
router.get('/dashboard', (req, res) => {
 Project.findAll({
 where: {
   //bring this back when more data in database hard coded user 1 project from seeds for now
  //user_id: req.session.user_id
  user_id: 1
}})
.then(dbProjectData =>{
  const projects = dbProjectData.map(project => project.get({ plain: true }));
    res.render('dashboard', { projects, loggedIn: true });
})
.catch(err => {
  console.log(err);
  res.status(500).json(err);
})
})
router.get('/hours', (req, res)=>{
  res.render('hours')
});

module.exports = router;