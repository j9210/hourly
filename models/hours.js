const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hours extends Model { }

Hours.init(
    {
        //columns
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        total_hours: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        billable_hours: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id"'
            }
        },
        unbillable_hours: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }

    },
    {
       sequelize,
       freezeTableName: true,
       underscored: true,
       modelName: 'hours' 
    }
);

module.exports = Hours;