const Categories = require("../Models/categories.models");
const Courses = require("../Models/courses.models");
const Videos = require("../Models/videos.models");

class CoursesServices {
    static async getAll() {
        try {
            const result = await Courses.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getCourseJoin(id){
        try {
            const result = await Courses.findOne({
                where: {id},
                attributes: ["id", "title", "description", "instructor"],
                include: [{
                    model: Categories,
                    as: "categorie",
                    attributes: ["name"],
                    
                },{
                    model: Videos,
                    as: "course",
                    attributes: ["title", "url"],
                }],
            })
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async add(data) {
        try {
            const result = await Courses.create(data);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async update(data, id) {
        try {
            const result = await Courses.update(data, {
                where: {id},
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CoursesServices;