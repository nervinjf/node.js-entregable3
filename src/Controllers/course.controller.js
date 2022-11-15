const CoursesServices = require('../Services/courses.services');

const getAllCourses = async (req, res, next) => {
    try {
        const result = await CoursesServices.getAll();
        res.json(result);
    } catch (error) {
        next({
            message: "Algo salio mal al crear  los cursos",
            status: 400,
            errorContent: error,
        });
    }
}

const getCoursesJoinCategoryandVideos = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await CoursesServices.getCourseJoin(id);
        res.json(result);
    } catch (error) {
        next({
            message: "no se pudieron obtener los cursos",
            status: 400,
            errorContent: error,
        });
    }
}

const newCourse = async (req, res, next) => {
    try {
        const data = req.body;
        const result = await CoursesServices.add(data);
        res.json(result);
    } catch (error) {
        next({
            message: "Algo salio mal al crear el curso",
            status: 400,
            errorContent: error,
        })
    }
}

const updateCourse = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = await CoursesServices.update(data, id);
        res.json(result);
    } catch (error) {
        next({
            message: "No se ha podido actualizar el curso",
            status: 400,
            errorContent: error,
        })
    }
}


module.exports = {
    getAllCourses,
    getCoursesJoinCategoryandVideos,
    newCourse,
    updateCourse
};