import mongoose from 'mongoose';
import userSchema from './userSchema';

/**
 * Define the Reaction Schema
 * @param {String} reactionId - The ID of the reaction
 * @param {Object} user - The user who reacted
 * @param {String} reactionType - The type of reaction
 */

const reactionSchema = new mongoose.Schema({
    reactionId: String,
    user: userSchema,
    reactionType: String
}, { _id: false });

export default reactionSchema;