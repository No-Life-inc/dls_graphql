import mongoose from 'mongoose';


/**
 * Define the CommentInfo Schema
 * @param {String} commentInfoId - The ID of the comment info
 * @param {String} bodyText - The body text of the comment
 * @param {Date} createdAt - The date the comment info was created
 **/

const commentInfoSchema = new mongoose.Schema({
    // commentInfoId: String,
    bodyText: String,
    createdAt: Date
}, { _id: false });

export default commentInfoSchema;