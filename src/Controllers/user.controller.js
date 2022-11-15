const UserServices = require('../Services/users.services');

const getAllUsers = async (req, res, next) => {
    try {
        const result = await UserServices.getAll();
        res.json(result);
    } catch (error) {
        next({
            message: "no se pudieron obtener los usuarios",
            status: 400,
            errorContent: error,
        })
    }
};

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await UserServices.getById(id);
        res.json(result);
    } catch (error) {
        next({
            message: "no se pudieron obtener los usuarios",
            status: 400,
            errorContent: error,
        })
    }
};

const getUserWithCourses = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await UserServices.getUserJoinCourses(id);
        res.json(result);
    } catch (error) {
        next({
            message: "no se pudieron obtener los usuarios y los cursos",
            status: 400,
            errorContent: error,
        });
    }
}

const createUser = async (req, res, next) => {
    try {
        const newuser = req.body;
        console.log(newuser);
        const result = await UserServices.add(newuser);
        res.status(201).json(result);
    } catch (error) {
        next({
            message: "Algo salio mal al crear al usuario",
            status: 400,
            errorContent: error,
        })
    }
}

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = await UserServices.update(data, id);
        res.json(result);
    } catch (error) {
        next({
            message: "No se ha podido actualizar al usuario",
            status: 400,
            error: error,
        });
    }
}


module.exports = {
    getAllUsers,
    getUserById,
    getUserWithCourses,
    createUser,
    updateUser,
};
