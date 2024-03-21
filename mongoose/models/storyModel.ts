import mongoose from 'mongoose';
import storySchema from '../schemas/storySchema';


/**
 * Get a reference to the 'frontend_db' database
 */
const db = mongoose.connection.useDb('frontend_backend_db');


// Define your model on the 'frontend_db' database
const Story = db.model('Story', storySchema, 'stories');
export default Story;