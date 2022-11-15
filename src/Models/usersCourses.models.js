const db = require('../Utils/database');
const { DataTypes } = require('sequelize');
const Users = require('./users.models');
const Courses = require('./courses.models');

const Userscourses = db.define('userscourses', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Users,
            key: 'id',
        },
        field: 'user_id',
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
})

module.exports = Userscourses;