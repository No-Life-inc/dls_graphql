import { ApolloServer } from "apollo-server-express";
import Schema from "../graphql/Schema";
import Query from "../graphql/resolvers/Query";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import mongoose from "mongoose";

async function startApolloServer(schema: any, resolvers: any) {
  const app = express();
  const httpServer = http.createServer(app);

  // Connect to MongoDB
// Connect to MongoDB
await mongoose.connect('mongodb://admin:Passw0rd!@localhost:27017/admin', {});

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: Query,
    //tell Express to attach GraphQL functionality to the server
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  }) as any;
  await server.start(); //start the GraphQL server.
  server.applyMiddleware({ app });
  await new Promise<void>(
    (resolve) => httpServer.listen({ port: 4001 }, resolve) //run the server on port 4000
  );
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
}
//in the end, run the server and pass in our Schema and Resolver.
startApolloServer(Schema, Query);
