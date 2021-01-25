const router = require('express').Router();
const { Hours } = require('../../models');
const sequelize = require('../../config/connection');

//get hours/
router.get('/', (req, res) => {
  Hours.findAll({
  
  })
    .then(dbHoursData => res.json(dbHoursData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get hours by /id
router.get('/:id', (req, res) => {
  Hours.findOne({
    where: {
      id: req.params.id
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
router.post('/', (req, res) => {
    // check the session
    if (req.session) {
      Hours.create({
        //user_id: req.body.user_id,
        billable_hours: req.body.billable_hours,
        unbillable_hours: req.body.unbillable_hours,
        //use the id from the session
        user_id: req.session.user_id
      })
        .then(dbhoursData => res.json(dbhoursData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    }
  });

//update
router.put('/:id', (req, res) => {
  Hours.update(
    {
      billable_hours: req.body.billable_hours
    },
    {
      where: {
        id: req.params.id 
      }
    }
  )
  .then(dbHoursData => {
    if(!dbHoursData) {
      res.status(404).json({ message: 'No hours found with this id'});
      return;
    }
    res.json(dbHoursData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


//delete
router.delete('/:id', (req, res) => {
  Hours.destroy({
    where: {
      id: req.params.id
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


  //totalhours
  router.get('/totalhours', (req, res) => {
    //check the session
    if (req.session) {
      Hours.findAll({
        attributes: [[sequelize.literal("SUM(billable_hours + unbillable_hours)"), "result"]],
        where: { 

          user_id: req.session.user_id
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
