const db = require('../Utils/database');
const { DataTypes } = require('sequelize');
const Courses = require('./courses.models');

const Categories = db.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Courses,
            key: 'id',
        },
        field: 'course_id',
    },
});

module.exports = Categories;