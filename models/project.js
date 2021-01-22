const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter a project title/name'
                }
            }
        },
        date_started: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter the project start date'
                }
            }
        },
        date_ended: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Pease enter project end date'
                }
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'project'   
    }
);

module.exports = Project;