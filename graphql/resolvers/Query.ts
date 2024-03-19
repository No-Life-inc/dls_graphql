import Story from "../../mongoose/models/storyModel";

export default {
    Query: {
        getAllStories: async () => {
        return await Story.find();
        },
        getStory: async (_: any, args: any) => {
        return await Story.findById(args.id);
        }
    },
    };