import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent($eventText: String!) {
    addEvent(eventText: $eventText) {
      _id
      eventText
      createdAt
      username
    }
  }
`;

export const ADD_ASSOCIATE = gql`
  mutation addAssociate($id: ID!) {
    addAssociate(associateId: $id) {
      _id
      username
      associateCount
      associates {
        _id
        username
      }
    }
  }
`;

export const REMOVE_ASSOCIATE = gql`
  mutation removeAssociate($id: ID!) {
    removeAssociate(id: $id) {
      _id
      username
      associates {
        _id
        username
      }
    }
  }
`;