import { gql } from "apollo-server-express"; //will create a schema
const Schema = gql`
  type Story {
    id: ID!
    title: String,
    body_text: String,
    img_url: String,
    created_at: String
  }
  
  type User {
    _id: String,
    first_name: String,
    last_name: String,
    image_url: String,
    created_at: String
  }

  #handle user commands
  type Query {
    getAllStories: [Story]
    getStory(id: String): Story
    getAllUsers: [User]  
    getUser(id: String): User
}
`;

export default Schema; 
//export this Schema so we can use it in our project