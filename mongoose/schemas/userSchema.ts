import mongoose from 'mongoose';
import userInfoSchema from './userInfoSchema';

/**
 * Define the User Schema
 * @param {String} userId - The ID of the user
 * @param {Object} userInfo - The user's information
 */

const userSchema = new mongoose.Schema({
    _id: String,
    userInfo: userInfoSchema

});

export default userSchema;