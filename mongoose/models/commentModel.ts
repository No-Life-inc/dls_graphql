import mongoose from 'mongoose';



/**
 * Get a reference to the 'frontend_backend_db' database
 */
const db = mongoose.connection.useDb('frontend_backend_db');

// Define your model on the 'frontend_backend_db' database
const Comment = db.model('Comment', commentSchema, 'comments');
export default Comment;