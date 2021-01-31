  
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Hours, User, Project,  } = require('../models');
const withAuth = require("../utils/auth");

router.get('/', withAuth, (req, res) => {
  project.findAll({
  
  where: {
    // use the ID from the session
    user_id: req.session.user_id
  },
  attibutes: [
  [sequelize.literal('(SELECT COUNT(*) FROM project WHERE user_id = user_id)'), 'project']
  ]  
}
  )  
  .then(dbPostData => {
    // serialize data before passing to template
    const projects = dbPostData.map(project => project.get({ plain: true }));
    res.render('dashboard', { project, loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})
module.exports = router;
