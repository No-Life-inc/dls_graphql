import { gql } from "apollo-server-express";

const Schema = gql`
  type User {
    _id: ID!
    createdAt: String
    userInfo: UserInfo
    stories: [Story]
    comments: [Comment]
    reactions: [Reaction]
    friends: [User]
    blocked: [User]
  }

  type UserInfo {
    firstName: String
    lastName: String
    imgUrl: String
    email: String
    createdAt: String
  }

  type Story {
    _id: ID!
    createdAt: String
    storyInfo: StoryInfo
    comments: [Comment]
    reactions: [Reaction]
  }

  type StoryInfo {
    storyInfoId: ID!
    title: String
    bodyText: String
    imgUrl: String
    createdAt: String
  }

  type Comment {
    _id: ID!
    createdAt: String
    commentInfo: CommentInfo
    reactions: [Reaction]
  }

  type CommentInfo {
    _id: ID!
    bodyText: String
    createdAt: String
  }

  type ReactionType {
    _id: ID!
    reactionTypeName: String
    reactionTypeImg: String
  }

  type Reaction {
    _id: ID!
    reactionType: ReactionType
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