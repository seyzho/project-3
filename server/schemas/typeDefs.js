const { gql } = require('apollo-server-express');

const typeDefs = gql`{
    type Events {
        _id: ID
        eventText: String
        createdAt: String
        username: String
        commentCount: Int
    }
    
    type Comments {
        _id: ID
        commentBody: String
        createdAt: String
        username: String
    }
    
    type Query {
        users: [User]
        user(username: String!): User
        events(username: String): [Events]
        event(_id: ID!): Events
    }
}`;

module.exports = typeDefs;