const { User, Hours, Project } = require('../models');

const users = [
    {
        username: 'jsmith',
        password: 'jsmith123',
        email: 'jsmith@gmail.com'
    },
    {
        username: 'mjones',
        password: 'mjones123',
        email: "mjones@gmail.com"
    },
    {
        username: 'awashington',
        password: 'awashington123',
        email: "awashington@gmail.com"
    }
]

const hour = [
    {
        project_id: 1,
        billable_hours: '10',
        unbillable_hours: '5',
        
    },
    {
        project_id:1,

        billable_hours: '20',
        unbillable_hours: '10'
    },
    {
        project_id: 1,
        billable_hours: '25',
        unbillable_hours: '10'
    }
]

const projects = [
    {
        "title": "bootcamp",
        "user_id":1,
        "date_started": "1/21/2020",
        "date_ended": "1/22/2020"
    
    },

]


User.bulkCreate(users).then(result=>{
    console.log("Users added", result)
    Project.bulkCreate(projects).then(result=>{
        console.log("Project added", result)
        Hours.bulkCreate(hour).then(result=>{
            console.log("Hours added", result)
        });
    });
});

