const Category = require('../Models/categories.models');

class CategoryServices {

    static async add(data){
        try {
            const result = await Category.create(data);
            return result;
        } catch (error) {
            throw error
        }
    }

    static async remove(id){
        try {
            const result = await Category.destroy({
                where: { id },
            });
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = CategoryServices;