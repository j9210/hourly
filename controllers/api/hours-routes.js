const router = require('express').Router();
const { Hours } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

//get hours by project id
router.get('/:id', withAuth, (req, res) => {
  Hours.findAll({
    where: {
      project_id: req.body.project_id
    }
  })
    .then(dbHoursData => {
      if (!dbHoursData) {
        res.status(404).json({ message: 'No hours found with this id' });
        return;
      }
      res.json(dbHoursData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create
router.post('/:id',withAuth, (req, res) => {
    // check the session
    if (req.session) {
      Hours.create({
        project_id: req.body.project_id,
        //user_id: req.body.user_id,
        billable_hours: req.body.billable_hours,
        unbillable_hours: req.body.unbillable_hours
        //use the project_id from the session     
        
      })
        .then(dbhoursData => res.json(dbhoursData))

        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    }
  });

// //update
// router.put('/:id', withAuth, (req, res) => {
//   Hours.update(
//     {
//       billable_hours: req.body.billable_hours
//     },
//     {
//       where: {
//         id: req.params.id 
//       }
//     }
//   )
//   .then(dbHoursData => {
//     if(!dbHoursData) {
//       res.status(404).json({ message: 'No hours found with this id'});
//       return;
//     }
//     res.json(dbHoursData);
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });


//delete
router.delete('/:id', withAuth, (req, res) => {
  Hours.destroy({

    
  })
    .then(dbHoursData => {
      if (!dbHoursData) {
        res.status(404).json({ message: 'No hours found with this id' });
        return;
      }
      res.json(dbHoursData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


  //totalhours
  router.get('/totalhours', withAuth, (req, res) => {
    //check the session
    if (req.session) {
      Hours.findAll({
        attributes: [[sequelize.literal("SUM(billable_hours + unbillable_hours)"), "result"]],
        where: { 

          project_id: req.session.project_id
        }
      })
       .then(dbhoursData => res.json(dbhoursData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
    }
  })

  module.exports = router;
