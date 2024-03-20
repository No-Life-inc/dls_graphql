// commentSchema.ts
import mongoose from 'mongoose';
import userSchema from './userSchema';
import commentInfoSchema from './commentInfoSchema';
import reactionSchema from './reactionSchema';

/**
 * Define the Comment Schema
 * @param {String} commentId - The ID of the comment
 * @param {Date} createdAt - The date the comment was created
 * @param {Object} user - The user who created the comment
 * @param {Object} commentInfo - The comment's information
 */

const commentSchema = new mongoose.Schema({
    commentId: String,
    createdAt: Date,
    user: userSchema,
    commentInfo: commentInfoSchema,
    reactions: [reactionSchema]

});

export default commentSchema;