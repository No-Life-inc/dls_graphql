import mongoose from 'mongoose';

/**
 * Define the UserInfo Schema
 * @param {String} firstName - The first name of the user
 * @param {String} lastName - The last name of the user
 * @param {String} imgUrl - The image URL of the user
 * @param {String} email - The email of the user
 * @param {Date} createdAt - The date the user info was created
 *
 */

const userInfoSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    imgUrl: String,
    email: String,
    createdAt: Date
}, { _id: false });

export default userInfoSchema;