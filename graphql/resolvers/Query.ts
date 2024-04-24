import Story from "../../mongoose/models/storyModel";

export default {
    Query: {
        getAllStories: async (_: any, __: any, context: any) => {
            // Check if user is authenticated
            const { user } = context;
            if (!user) {
                throw new Error("Authentication required to access all stories.");
            }
            // User is authenticated, return all stories
            return await Story.find();
        },
        getStory: async (_: any, args: any, context: any) => {
            // Check if user is authenticated
            const { user } = context;
            if (!user) {
                throw new Error("Authentication required to access story.");
            }
            // User is authenticated, return the specific story
            return await Story.findById(args.id);
        }
    },
};
