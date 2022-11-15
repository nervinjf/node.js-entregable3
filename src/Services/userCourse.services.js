const usersCourses = require('../Models/usersCourses.models');

class UserCourseServices {
    static async add(data){
        try {
            const result = await usersCourses.create(data);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserCourseServices;