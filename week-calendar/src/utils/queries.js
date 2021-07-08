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