  
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Hours, User, Project,  } = require('../models');
const withAuth = require("../utils/auth");

// get all posts for dashboard
router.get('/',withAuth, function (req, res) {
    console.log(req.session);
    console.log('======================');
    Hours.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'user_id',
              [sequelize.literal('(SELECT COUNT(*) FROM hours WHERE post.id = hours_id)'), 'hours_count']
      ],
      include: [
        {
          model: Project,
          attributes: [ 'user_id', ],
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
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.get('/edit/:id', withAuth, (req, res) => {
  Hours.findByPk(req.params.id, {
    attributes: [
      'user_id' ,     [sequelize.literal('(SELECT COUNT(*) FROM hours WHERE hours = hours)'), ]
    ],
    include: [
      {
        model: Project,
        attributes: [ 'user_id', ],
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
    .then(dbdata=> {
      if (dbdata) {
        const dbdata = dbdata.get({ plain: true });
        
        
      
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
