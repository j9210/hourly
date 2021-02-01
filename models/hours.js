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
        user_id: {
            type:DataTypes.STRING,
            allowNull: false,
            reference: {
                model: 'user',
                key: 'id'
            }
        },
        billable_hours: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        unbillable_hours: {
            type: DataTypes.INTEGER,
            allowNull: false
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