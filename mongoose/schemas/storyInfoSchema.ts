import mongoose from 'mongoose';

/**
 * Define the StoryInfo Schema
 * @param {String} title - The title of the story
 * @param {String} bodyText - The body text of the story
 * @param {String} imgUrl - The image URL of the story
 * @param {Date} createdAt - The date the story was created
 */

const storyInfoSchema = new mongoose.Schema({
    title: String,
    bodyText: String,
    imgUrl: String,
    createdAt: Date
}, { _id: false });

export default storyInfoSchema;