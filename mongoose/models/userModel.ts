import mongoose from 'mongoose';
import userSchema from '../schemas/userSchema';
import dotenv from 'dotenv';
dotenv.config();

/**
 * Get a reference to the 'frontend_backend_db' database
 */
const db = mongoose.connection.useDb(process.env.MONGODB || "");

// Define your model on the 'frontend_backend_db' database
const User = db.model('User', userSchema, 'users');
export default User;