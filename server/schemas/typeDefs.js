const { gql } = require('apollo-server-express');

const typeDefs = gql`{
    type Events {
        _id: ID
        username: String
        title: String
        eventBody: String
        timeOfDay: Int
        length: Int
        createdAt: String
        commentCount: Int
    }
    
    type Comments {
        _id: ID
        username: String
        commentBody: String
        createdAt: String
    }
    
    type Query {
        users: [User]
        user(username: String!): User
        events(username: String): [Events]
        event(_id: ID!): Events
    }

    type Mutation {
        addEvent(username: String!, title: String!, eventBody: String!, timeOfDay: Int!, length: Int!): Events
        updateEvent(username: String!, evendId: ID!, title: String, eventBody: String, timeOfDay: Int, length: Int): Events
        addComment(username: String!, eventId: ID!, commentBody: String!): Comments
        updateComment(Username: String!, eventId: ID!, commentID!, commentBody: String): Comments
    }
}`;

module.exports = typeDefs;