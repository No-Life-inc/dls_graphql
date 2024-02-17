import e from 'express';
import mongoose from 'mongoose';

const storySchema = new mongoose.Schema({
  title: String,
  bodyText: String,
    imgUrl: String,
    createdAt: String
});

// Get a reference to the 'frontend_db' database
const db = mongoose.connection.useDb('frontend_db');

// Define your model on the 'frontend_db' database
const Story = db.model('Story', storySchema, 'stories');
export default Story;