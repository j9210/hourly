const router = require('express').Router();
const { Project } = require('../../models');

//get all projects
router.get('/', (req, res) => {
  Project.findAll({
  
  })
    .then(dbProjectData => res.json(dbProjectData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/projects/1
router.get('/:id', (req, res) => {
  Project.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No project found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



// POST /api/projects

router.post('/', (req, res) => {
    // check the session
    if (req.session) {
      Project.create({
        project_name: req.body.project_name,
        starting_date: req.body.starting_date,
        end_date: req.body.end_date,
        // use the id from the session
        user_id: req.session.user_id
      })
        .then(dbprojectData => res.json(dbprojectData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    }
  });

  // //update name, start and end date
  // router.put('/:id', (req, res) => {
  //   //expects { project_name: coding homework, Starting_date: , end_date: }

  //   //pass in req.body instead to update whats passed through
  //   }
  // })

  // DELETE /api/projects/1
router.delete('/:id', (req, res) => {
  Project.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No project found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});




module.exports = router;

