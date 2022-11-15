const UserCourseServices = require('../Services/userCourse.services');

const newUseCourse = async (req, res, next) => {
    try {
        const data = req.body;
        const result = await UserCourseServices.add(data);
        res.json(result);
    } catch (error) {
        next({
            message: "no se pudieron crear los datos de usuarios y cursos",
            status: 400,
            errorContent: error,
        });
    }
}

module.exports = {
    newUseCourse,
};