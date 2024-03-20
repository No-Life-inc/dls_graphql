import e from 'express';
import mongoose from 'mongoose';

/**
 * Define the Story model
 * @param {String} title - The title of the story
 * @param {String} body_text - The body text of the story
 * @param {String} img_url - The image URL of the story
 * @param {Date} created_at - The date the story was created
 * @param {Object} user - The user who created the story
 */
const userSchema = new mongoose.Schema({
    userId: String,
    firstName: String,
    lastName: String,
    imgUrl: String
}, { _id: false });

const storyInfoSchema = new mongoose.Schema({
    storyInfoId: String,
    title: String,
    bodyText: String,
    imgUrl: String,
    createdAt: String
}, { _id: false });

const storySchema = new mongoose.Schema({
    storyId: String,
    storyGuid: String,
    createdAt: String,
    user: userSchema,
    storyInfo: storyInfoSchema
});

/**
 * Get a reference to the 'frontend_db' database
 */
const db = mongoose.connection.useDb('frontend_backend_db');


// Define your model on the 'frontend_db' database
const Story = db.model('Story', storySchema, 'stories');
export default Story;