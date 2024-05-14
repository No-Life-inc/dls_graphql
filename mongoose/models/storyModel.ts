import mongoose from 'mongoose';
import storySchema from '../schemas/storySchema';
import dotenv from 'dotenv';
dotenv.config();


/**
 * Get a reference to the 'frontend_db' database
 */
const db = mongoose.connection.useDb(process.env.MONGODB || "");
console.log(process.env.MONGODB);


// Define your model on the 'frontend_db' database
const Story = db.model('Story', storySchema, 'stories');
export default Story;