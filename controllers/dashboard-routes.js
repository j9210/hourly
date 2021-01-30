  
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Hours, User, Project,  } = require('../models');
const withAuth = require("../utils/auth");

// get all posts for dashboard

// router.get('/edit/:id', withAuth, (req, res) => {
//   Hours.findByPk(req.params.id, {
//     attributes: [
//       'user_id' ,     [sequelize.literal('(SELECT COUNT(*) FROM hours WHERE hours = hours)'), ]
//     ],
//     include: [
//       {
//         model: Project,
//         attributes: [ 'user_id', ],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbdata=> {
//       if (dbdata) {
//         const dbdata = dbdata.get({ plain: true });
        
        
      
//       } else {
//         res.status(404).end();
//       }
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });


// router.get('/', withAuth, (req, res) => {
//   res.render('dashboard');
// });
router.get('/', (req, res) => {
  res.render('dashboard', { loggedIn: true });
});

module.exports = router;
