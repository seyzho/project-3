import gql from 'graphql-tag';

export const QUERY_EVENTS = gql`
  query events($username: String) {
    events(username: $username) {
      _id
      eventText
      createdAt
      username
    }
  }
`;

export const QUERY_THOUGHT = gql`
  query event($id: ID!) {
    event(_id: $id) {
      _id
      eventText
      createdAt
      username
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      associateCount
      associates {
        _id
        username
      }
      events {
        _id
        eventText
        createdAt
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
      associateCount
      events {
        _id
        eventText
        createdAt
      }
      associates {
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
      associateCount
      associates {
        _id
        username
      }
    }
  }
`;
