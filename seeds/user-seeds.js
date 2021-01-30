const { User, Hours } = require('../models');

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

const hours = [
    {
        user_id: '1',
        billable_hours: '10',
        unbillable_hours: '5'
    },
    {
        user_id: '1',
        billable_hours: '20',
        unbillable_hours: '10'
    },
    {
        user_id: '1',
        billable_hours: '25',
        unbillable_hours: '10'
    }
]


User.bulkCreate(users).then(result=>{
    console.log("Users added", result)
    Hours.bulkCreate(hours).then(result=>
        console.log('Hours added to user'))
})