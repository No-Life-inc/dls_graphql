import { ApolloServer } from "apollo-server-express";
import Schema from "../graphql/Schema";
import Query from "../graphql/resolvers/Query";
import express, {Request, Response, NextFunction}from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'

dotenv.config();

const port = process.env.PORT || 3000;

const mongoUser = process.env.MONGOUSER;
const mongoPw = process.env.MONGOPW;
const mongoUrl = process.env.MONGOURL;
const jwtsecret = process.env.JWTSECRET || "";

const mongoUri = `mongodb://${mongoUser}:${mongoPw}${mongoUrl}`;

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

async function startApolloServer(schema: any, resolvers: any) {
  const app = express();
  const httpServer = http.createServer(app);

  const verifyToken = (req: Request,res: Response,next: NextFunction)=>{
    const token = req.headers.authorization;

    if (!token){
      return res.status(401).json({message: 'Missing JWT-token'})
    }

    jwt.verify(token,jwtsecret, (err: any,decoded:any)=>{
      if (err){
        return res.status(401).json({message: 'Invalid JWT-token'});
      }
      req.user = decoded;
      next();
    });
  };

  app.use('/graphql', verifyToken)

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
