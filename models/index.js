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
Project.hasMany(Hours, {
    foreignKey: 'user_id'
})
Hours.belongsTo(Project, {
    foreignKey: 'user_id'
})

module.exports = { User, Hours, Project };
