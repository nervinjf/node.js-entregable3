const db = require('../Utils/database');
const { DataTypes } = require('sequelize');
const Courses = require('./courses.models');

const Videos = db.define('videos', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Courses,
            key: 'id',
        },
        field: 'course_id',
    },
});

module.exports = Videos;