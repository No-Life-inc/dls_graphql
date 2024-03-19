import { ApolloServer } from "apollo-server-express";
import Schema from "../graphql/Schema";
import Query from "../graphql/resolvers/Query";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;

const mongoUser = process.env.MONGOUSER;
const mongoPw = process.env.MONGOPW;
const mongoUrl = process.env.MONGOURL;

const mongoUri = `mongodb://${mongoUser}:${mongoPw}${mongoUrl}`;

async function startApolloServer(schema: any, resolvers: any) {
  const app = express();
  const httpServer = http.createServer(app);

  // Connect to MongoDB
  await mongoose.connect(mongoUri, {});

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: Query,
    //tell Express to attach GraphQL functionality to the server
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  }) as any;
  await server.start(); //start the GraphQL server.
  server.applyMiddleware({ app });
  await new Promise<void>(
    (resolve) => httpServer.listen({ port: port }, resolve) //run the server on port 4000
  );
  console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
}
//in the end, run the server and pass in our Schema and Resolver.
startApolloServer(Schema, Query);
