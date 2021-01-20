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