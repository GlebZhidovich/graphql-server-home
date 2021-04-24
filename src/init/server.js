// Core
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
// Resolvers
import { resolvers } from './resolvers';
// Schema
import typeDefs from './schema.graphql';

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

export {
  app,
  server
}
