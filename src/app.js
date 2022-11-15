const express = require('express');
const userRoutes = require('./Routes/users.routes');
const coursesRoutes = require('./Routes/course.routes');
const videosRoutes = require('./Routes/videos.routes');
const categoriesRoutes = require('./Routes/categories.routes');
const usersCourse = require('./Routes/usersCourses.routes');
const db = require('./Utils/database');
const initModels = require('../src/Models/initModels')
const morgan = require('morgan');
const  handleError = require('./Middlewares/error');
// const Users = require('./Models/users.models');


const PORT = 8000;

initModels();

db.authenticate()
    .then(() => console.log('Authent exitosa'))
    .catch((error) => console.log(error));

db.sync({ force: false })
    .then(() => console.log('Sync exitosa'))
    .catch(error => console.log(error));

const app = express();

app.use(express.json());
app.use(morgan('tiny'));


app.get('/', (req, res, next) => {
    res.send('Good Job');
})

app.use('/api/v1', userRoutes);

app.use('/api/v1', coursesRoutes);

app.use('/api/v1', videosRoutes);

app.use('/api/v1', categoriesRoutes);

app.use('/api/v1', usersCourse);

app.use(handleError);


app.listen(PORT, () => {console.log(`Servidor corriendo en puerto: ${PORT}`)});
