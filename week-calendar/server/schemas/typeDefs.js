const { gql } = require('apollo-server-express');

const typeDefs = gql`{
    type User {
        _id: ID
        username: String
        email: String
        coworkerCount: Int
        events: [Event]
        coworkers: [User]
      }

    type Events {
        _id: ID
        username: String
        title: String
        eventBody: String
        startTime: Int
        endTime: Int
        createdAt: String
        commentCount: Int
        comment: [Comments]
    }
    
    type Comments {
        _id: ID
        username: String
        commentBody: String
        createdAt: String
    }

    type Auth {
        token: ID!
        user: user
    }
    
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        events(username: String): [Events]
        event(_id: ID!): Events
    }

    type Mutation {
        addEvent(username: String!, title: String!, eventBody: String!, startTime: Int!, endTime: Int!): Events
        updateEvent(username: String!, evendId: ID!, title: String, eventBody: String, startTime: Int, endTime: Int): Events
        addComment(username: String!, eventId: ID!, commentBody: String!): Comments
        updateComment(Username: String!, eventId: ID!, commentID!, commentBody: String): Comments
    }
}`;

module.exports = typeDefs;