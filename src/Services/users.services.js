const Courses = require('../Models/courses.models');
const Users = require('../Models/users.models');
const Userscourses = require('../Models/userscourses.models');

class UserServices {
    static async getAll() {
        try {
            const result = await Users.findAll({
                attributes: ["id", "firstName", "lastName", "email"],
            });
            return result
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
            const result = await Users.findByPk(id, {
                where: { id },
                attributes: ["id", "firstName", "lastName", "email"],
            })
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getUserJoinCourses(id) {
        try {
            const result = await Users.findOne({
                where: { id },
                attributes: ["id", "firstName", "lastName", "email"],
                include: {
                    model: Userscourses,
                    as: "ucourse",
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "course_id", "user_id", "userId", "courseId"]
                    },
                    include: {
                        model: Courses,
                        as: "course",
                        attributes:{
                            exclude: ["createdAt", "updatedAt", "instructor", "description", "id"]
                        }
                    },
                },
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async add(newuser) {
        try {
            const result = await Users.create(newuser);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async update(data, id){
        try {
            const result = await Users.update(data, {
                where: { id },
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
}


module.exports = UserServices;