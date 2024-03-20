import mongoose from 'mongoose';
import userSchema from './userSchema';
import storyInfoSchema from './storyInfoSchema';
import commentSchema from './commentSchema';
import reactionSchema from './reactionSchema';

/**
 * Define the Story Schema
 * @param {String} storyId - The ID of the story
 * @param {Date} createdAt - The date the story was created
 * @param {Object} user - The user who created the story
 * @param {Object} storyInfo - The story's information
 * @param {Array} comments - The comments on the story
 * @param {Array} reactions - The reactions on the story
 */

const storySchema = new mongoose.Schema({
    storyId: String,
    createdAt: Date,
    user: userSchema,
    storyInfo: storyInfoSchema,
    comments: [commentSchema],
    reactions: [reactionSchema]
});

export default storySchema;