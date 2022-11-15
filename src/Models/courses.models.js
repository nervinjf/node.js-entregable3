const db = require('../Utils/database');
const { DataTypes } = require('sequelize');

const Courses = db.define('courses', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,

    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    instructor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}); 

module.exports = Courses;