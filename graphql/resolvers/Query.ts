import Story from "../../mongoose/models/storyModel";
import User from "../../mongoose/models/userModel";

export default {
    Query: {
        getAllStories: async () => {
        return await Story.find();
        },
        getStory: async (_: any, args: any) => {
        return await Story.findById(args.id);
        },
        getAllUsers: async () => {
        return await User.find();
        },
        getUser: async (_: any, args: any) => {
        return await User.findById(args.id);
        }
    },
    };