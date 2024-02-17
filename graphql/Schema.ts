import { gql } from "apollo-server-express"; //will create a schema
const Schema = gql`
  type Story {
    id: ID!
    title: String
    bodyText: String
    imgUrl: String
    createdAt: String
  }

  #handle user commands
  type Query {
    getAllStories: [Story]
    getStory(id: Int): Story
}`;



export default Schema; 
//export this Schema so we can use it in our project