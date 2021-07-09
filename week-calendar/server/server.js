const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require('path');

const { typeDefs, resolvers } = require("./schemas");
// const {authMiddleware} = require('./utils/auth');
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

// create a new Apollo server and input schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: authMiddleware
});

// integrate Apollo with Express application as middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../week-calendar/build')));
// }

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../week-calendar/build/index.html'));
// });

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});