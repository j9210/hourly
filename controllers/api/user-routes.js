const router = require('express').Router();
const { User } = require('../../models');

router.get('/', (req, res) => {
    User.findAll({

    })
});



router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        hours_id: req.body.hours_id,
        password: req.body.password
      })
        .then(dbUserData => {
          console.log(dbUserData);
          req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
      
            res.json(dbUserData);
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });


    module.exports = router;