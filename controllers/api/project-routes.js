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







//create 

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

  //update name, start and end date
  router.put('/:id', (req, res) => {
    //expects { project_name: coding homework, Starting_date: , end_date: }

    //pass in req.body instead to update whats passed through
    }
  })





  //delete

