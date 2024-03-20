import mongoose from 'mongoose';
import userSchema from '../schemas/userSchema';

/**
 * Get a reference to the 'frontend_backend_db' database
 */
const db = mongoose.connection.useDb('frontend_backend_db');

// Define your model on the 'frontend_backend_db' database
const User = db.model('User', userSchema, 'users');
export default User;