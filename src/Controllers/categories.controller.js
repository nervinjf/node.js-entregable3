
const CategoryServices = require('../Services/categories.services');

const newCategory = async (req, res, next) => {
    try {
        const data = req.body;
        const result = await CategoryServices.add(data);
        res.json(result);
    } catch (error) {
        next({
            message: "Algo salio mal al crear la categoria",
            status: 400,
            errorContent: error,
        });
    }
}

const deleteCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await CategoryServices.remove(id);
        res.json(result);
    } catch (error) {
        next({
            message: "Algo salio mal al eliminar la categoria",
            status: 400,
            errorContent: error,
        })
    }
}

module.exports = {
    newCategory,
    deleteCategory,
};