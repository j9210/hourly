  
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Hours, User, Project,  } = require('../models');

// get all posts for dashboard
router.get('/', function (req, res) {
    console.log(req.session);
    console.log('======================');
    Hours.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'post_url',
        'title',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM hours WHERE post.id = hours.post_id)'), 'hours_count']
      ],
      include: [
        {
          model: Project,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
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

router.get('/edit/:id', (req, res) => {
  Hours.findByPk(req.params.id, {
    attributes: [
      'id',
      'post_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM hours WHERE post.id = hours.post_id)'), 'vote_count']
    ],
    include: [
      {
        model: Project,
        attributes: ['id', 'hours', 'projects', 'user_id', 'created_at'],
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
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });
        
        res.render('edit-post', {
          post,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;