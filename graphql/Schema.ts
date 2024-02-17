import { gql } from "apollo-server-express"; //will create a schema
const Schema = gql`
  type Person {
    id: ID!
    name: String
  }
  type Story {
    id: ID!
    title: String
    bodyText: String
    imgUrl: String
    createdAt: String
  }

  #handle user commands
  type Query {
    getAllPeople: [Person] #will return multiple Person instances
    getPerson(id: Int): Person 
    getAllStories: [Story]
    getStory(id: Int): Story
}`;



export default Schema; 
//export this Schema so we can use it in our project