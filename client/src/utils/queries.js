import gql from 'graphql-tag';

export const QUERY_THOUGHTS = gql`
  query events($username: String) {
    events(username: $username) {
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
      events {
        _id
        eventText
        createdAt
      }
    }
  }
`;