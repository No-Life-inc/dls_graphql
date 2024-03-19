import e from 'express';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    image_url: String,
    created_at: Date
});

// Get a reference to the 'frontend_db' database
const db = mongoose.connection.useDb('frontend_backend_db');

// Define your model on the 'frontend_db' database
const User = db.model('User', userSchema, 'users');
export default User;