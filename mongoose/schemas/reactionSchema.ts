import mongoose from 'mongoose';
import userSchema from './userSchema';

const reactionSchema = new mongoose.Schema({
    reactionId: String,
    user: userSchema,
    reactionType: String
}, { _id: false });

export default reactionSchema;