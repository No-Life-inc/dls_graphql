import { gql } from "apollo-server-express"; //will create a schema
const Schema = gql`
  type User {
    user_id: ID!
    user_guid: String
    created_at: String
    user_info: UserInfo
    stories: [Story]
    comments: [Comment]
    reactions: [Reaction]
    friends: [User]
    blocked: [User]
  }

  type UserInfo {
    user_info_id: ID!
    first_name: String
    last_name: String
    img_url: String
    email: String
    created_at: String
  }

  type Story {
    story_id: ID!
    story_guid: String
    created_at: String
    story_info: StoryInfo
    comments: [Comment]
    reactions: [Reaction]
  }

  type StoryInfo {
    story_info_id: ID!
    title: String
    body_text: String
    img_url: String
    created_at: String
  }

  type Comment {
    comment_id: ID!
    comment_guid: String
    created_at: String
    comment_info: CommentInfo
    reactions: [Reaction]
  }

  type CommentInfo {
    comment_info_id: ID!
    body_text: String
    created_at: String
  }

  type ReactionType {
    reaction_type_id: ID!
    reaction_type_name: String
    reaction_type_img: String
  }

  type Reaction {
    reaction_id: ID!
    reaction_type: ReactionType
  }

  type Query {
    getAllUsers: [User]
    getUser(id: ID!): User
    getAllStories: [Story]
    getStory(id: ID!): Story
    getAllComments: [Comment]
    getComment(id: ID!): Comment
  }
`;

export default Schema;
//export this Schema so we can use it in our project
