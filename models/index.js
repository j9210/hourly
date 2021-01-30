const User = require('./user');
const Hours = require('./hours');
const Project = require('./project');

//create associations
User.hasMany(Project, {
    foreignKey: 'user_id'
})

Project.belongsTo(User, {
    foreignKey: 'user_id'
})
// Project.hasMany(Hours, {
//     foreignKey: 'project_id'
// })
Project.hasMany(Hours, {
    foreignKey: 'project_id'
})
Hours.belongsTo(Project, {
         foreignKey: 'project_id'
     })

module.exports = { User, Hours, Project };
