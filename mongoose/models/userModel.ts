import e from 'express';
import mongoose, {Schema, Types} from 'mongoose';

const userSchema = new mongoose.Schema({
    _id: String,
    first_name: String,
    last_name: String,
    img_url: String,
    created_at: Date
});

// Get a reference to the 'frontend_db' database
const db = mongoose.connection.useDb('frontend_backend_db');

// Define your model on the 'frontend_db' database
const User = db.model('User', userSchema, 'users');
export default User;