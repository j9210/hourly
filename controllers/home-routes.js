const router = require('express').Router();
const sequelize = require('../config/connection');
const {  User, Hours , Project } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage');
});

// get all posts for homepage
// router.get('/', User, (req, res) => {
//   console.log('======================');
//   Hours.findAll({
//     attributes: [
//       'id',
//       'post_url',
//       'title',
//       'created_at',
//       [sequelize.literal('(SELECT COUNT(*) FROM hours WHERE hours.id = hours.post_id)'), 'hours_count']
//     ],
//     include: [
//       {
//         model: Project,
//         attributes: ['id', 'hours', 'projects', 'user_id', 'created_at'],
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
//     .then(dbPostData => {
//       const posts = dbPostData.map(post => post.get({ plain: true }));

//       res.render('homepage', {
//         posts,
//         loggedIn: req.session.loggedIn
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// get single post
router.get('hours', Hours, (req, res) => {
  Hours.findOne({
    where: {
      id: req.params.id
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
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = dbPostData.get({ plain: true });

      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

  res.render('login');
});


module.exports = router;