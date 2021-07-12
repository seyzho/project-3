import { gql } from '@apollo/client';

export const QUERY_EVENTS = gql`
    query events($username: String) {
        events(username: $username) {
            _id
            eventTitle
            eventBody
            username
            createdAt
            eventDay
            eventStart
            eventEnd
            zoomLink
            timezone
            commentCount
            comment {
                _id
                commentBody
                username
                createdAt
            }
        }
    }
`;

export const QUERY_EVENT = gql`
    query event($id: ID!) {
        event(_id: $id) {
            _id
            eventTitle
            eventBody
            username
            createdAt
            eventDay
            eventStart
            eventEnd
            zoomLink
            timezone
            commentCount
            comment {
                _id
                commentBody
                username
                createdAt
            }
        }
    }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      coworkerCount
      coworkers {
        _id
        username
      }
      thoughts {
        _id
        thoughtText
        createdAt
        reactionCount
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      coworkerCount
      thoughts {
        _id
        thoughtText
        createdAt
        reactionCount
        reactions {
          _id
          createdAt
          reactionBody
          username
        }
      }
      coworkers {
        _id
        username
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      coworkerCount
      coworkers {
        _id
        username
      }
    }
  }
`;