const Users = require('../Models/users.models');
const Categories = require('../Models/categories.models');
const Courses = require('../Models/courses.models');
const Videos = require('../Models/videos.models');
const Userscourses = require('../Models/userscourses.models');

const initModels = () => {
    Categories.belongsTo(Courses, {as: 'course', foreignKey: 'course_id'});
    Courses.hasMany(Categories, {as: 'categorie', foreignKey: 'course_id'});

    Videos.belongsTo(Courses, {as: 'video', foreignKey: 'course_id'});
    Courses.hasMany(Videos, {as: 'course', foreignKey: 'course_id'})
    // Users;
    // Categories;

    Userscourses.belongsTo(Courses, {as: 'course', foreignKey: 'course_id'});
    Courses.hasMany(Userscourses, {as: 'ucourse', foreignKey: 'course_id'});

    Userscourses.belongsTo(Users, {as: 'users', foreignKey: 'user_id'});
    Users.hasMany(Userscourses, {as: 'ucourse', foreignKey: 'user_id'});
};

module.exports = initModels;