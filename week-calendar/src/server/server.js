const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
// dont run until mongo is set up in config/connecetion

const PORT = process.env.PORT || 3001;
const app = express();

// create a new Apollo server and input schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// integrate Apollo with Express application as middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
// dont run until mongo is set up in config/connecetion
