import { ApolloServer } from "apollo-server-express";
import Schema from "../graphql/Schema";
import Query from "../graphql/resolvers/Query";
import express, { Request, Response, NextFunction } from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import mongoose from "mongoose";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import cors from "cors";

dotenv.config();

// add cors to allow cross-origin requests from env 
const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  optionsSuccessStatus: 200,
};


const port = process.env.PORT || 3000;

const mongoUser = process.env.MONGOUSER;
const mongoPw = process.env.MONGOPW;
const mongoUrl = process.env.MONGOURL;
const jwtsecret = process.env.JWT_SECRET || "";

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

  app.use(cors(corsOptions));

  const httpServer = http.createServer(app);

  app.use(express.json());

  // Middleware to enforce token verification for GraphQL operations
  const verifyTokenForGraphQL = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return next();
    }

    // Extract the token from Authorization header
    const token = authHeader.split(" ")[1];

    try {
      const buff = Buffer.from(jwtsecret, "base64");
      const decoded = jwt.verify(token, buff);

      req.user = decoded;
      next();
    } catch (err) {
      //console.debug('Verification of token failed');
      next();
    }
  };

  // Apply middleware to all routes
  app.use(verifyTokenForGraphQL);

  // Connect to MongoDB
  await mongoose.connect(mongoUri, {});

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: Query,
    //tell Express to attach GraphQL functionality to the server
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: ({ req }) => ({ user: req.user }),
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
