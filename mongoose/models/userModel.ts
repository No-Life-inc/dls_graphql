import mongoose from 'mongoose';

/**
 * Define the UserInfo model
 * @param {String} firstName - The first name of the user
 * @param {String} lastName - The last name of the user
 * @param {String} imgUrl - The image URL of the user
 * @param {String} email - The email of the user
 * @param {Date} createdAt - The date the user info was created
 */
const userInfoSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    imgUrl: String,
    email: String,
    createdAt: Date
}, { _id: false });

/**
 * Define the User model
 * @param {String} userId - The ID of the user
 * @param {String} userGuid - The GUID of the user
 * @param {Date} createdAt - The date the user was created
 * @param {Object} userInfo - The user's information
 */
const userSchema = new mongoose.Schema({
    userId: String,
    userGuid: String,
    createdAt: Date,
    userInfo: userInfoSchema
});

/**
 * Get a reference to the 'frontend_backend_db' database
 */
const db = mongoose.connection.useDb('frontend_backend_db');

// Define your model on the 'frontend_backend_db' database
const User = db.model('User', userSchema, 'users');
export default User;