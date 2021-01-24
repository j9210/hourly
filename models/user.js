const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    //sets up method to run on instance data (per user) to check password
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);
    }
}

//columns
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        hours_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'hours',
                key: 'id'
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                lens: [6]
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;
