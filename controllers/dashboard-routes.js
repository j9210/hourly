  
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Hours, User, Project } = require('../models');
const { findAll } = require('../models/user');
const withAuth = require("../utils/auth");

router.get('/dashboard', (req, res) => {
 Project.findAll({
  where: {
    user_id: req.session.user_id
    }
  })
  .then(dbProjectData =>{
    const projects = dbProjectData.map(project => project.get({ plain: true }));
      res.render('dashboard', { projects, loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

router.get(`/hours/:id`, (req, res)=>{
  Project.findOne({
    where: {

     id: req.params.id

   }
  })
   .then(dbProjectData =>{
    const project = dbProjectData.get({ plain: true })
      Hours.findAll({
        where: {
          project_id: req.params.id
        }
      })
        .then(dbHoursData => {
          if (!dbHoursData) {
            res.status(404).json({ message: 'No hours found with this id' });
            return;
          }
         
          const hours = dbHoursData.map(hours => hours.get({ plain: true }))
          res.render('hours', { project, hours, loggedIn: true });
          console.log(hours)
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
     
      
    
   })
  })
module.exports = router;