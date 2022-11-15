const db = require('../Utils/database');

const Categories = require('../Models/categories.models');
const Courses = require('../Models/courses.models');
const Videos = require('../Models/videos.models');
const User = require('../Models/users.models');
const usersCourses = require('../Models/usersCourses.models');




const users = [
    {
        firstName: "Carlos",
        lastName: "Torres",
        password: "1234",
        email: "carlos@gmail.com"
    },
    {
        firstName: "Daniel",
        lastName: "Salazar",
        password: "123456",
        email: "Daniel@gmail.com"
    },
    {
        firstName: "Ignacio",
        lastName: "Mendoza",
        password: "123456778",
        email: "imendoza@gmail.com"
    }
];

const courses = [
    {
        title: "PHP",
        description: "API",
        instructor: "Rodrigo"
    },
    {
        title: "React",
        description: "redux",
        instructor: "andres"
    },
    {
        title: "Nodejs",
        description: "API",
        instructor: "Ian"
    }
];

const categories = [
    {
        name: 'Backend',
        courseId:1
    },
    {
        name: 'Frontend',
        courseId:2
    }
];

const videos = [
    {
        title: 'twitt',
        url: 'http://www.twitter.com',
        courseId: 1
    },
    {
        title: 'musica',
        url: 'http://www.youtube.com',
        courseId: 2
    },
    {
        title: 'publicar',
        url: 'http://www.facebook.com',
        courseId: 3
    }
];

const uc = [
    {
        userId: 1,
        courseId: 2
    },
    {
        userId: 3,
        courseId: 3
    },
    {
        userId: 2,
        courseId: 1
    },
]

db.sync({ force: true })
    .then(() => {
        console.log('iniciando plantacion info');
        users.forEach(user => User.create(user));
        setTimeout(() => {
            courses.forEach(course => Courses.create(course));
        }, 100);
        setTimeout(() => {
            categories.forEach(category => Categories.create(category));
        },200);
        setTimeout(() => {
            videos.forEach(video => Videos.create(video));
        }, 300);
        setTimeout(() => {
            uc.forEach(uc => usersCourses.create(uc))
        },400)
    })
    .catch(error => console.error(error));