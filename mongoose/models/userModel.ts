import e from 'express';
import mongoose from 'mongoose';

/**
 * Define the User model
 * @param {String} first_name - The first name of the user
 * @param {String} last_name - The last name of the user
 * @param {String} image_url - The image URL of the user
 * @param {Date} created_at - The date the user was created
 */
const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    image_url: String,
    created_at: Date
});

/**
 * Get a reference to the 'frontend_db' database
 */
const db = mongoose.connection.useDb('frontend_backend_db');

// Define your model on the 'frontend_db' database
const User = db.model('User', userSchema, 'users');
export default User;