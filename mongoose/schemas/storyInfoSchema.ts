import mongoose from 'mongoose';

const storyInfoSchema = new mongoose.Schema({
    title: String,
    bodyText: String,
    imgUrl: String,
    createdAt: Date
}, { _id: false });

export default storyInfoSchema;