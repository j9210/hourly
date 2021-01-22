//create
router.post('/', (req, res) => {
    // check the session
    if (req.session) {
      Hours.create({
        hours_billable: req.body.hours_billable,
        nonbillable_hours: req.body.nonbillable_hours,
        // use the id from the session
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

//delete

//get one 