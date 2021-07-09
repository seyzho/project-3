import { gql } from '@apollo/client';

export const ADD_EVENT = gql`
    mutation addEvent($eventTitle: String!) {
        addEvent(eventTitle: $eventTitle) {
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

export const UPDATE_EVENT = gql`
    mutation updateEvent($eventTitle: String!) {
        updateEvent(eventTitle: $eventTitle) {
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

export const DELETE_EVENT = gql`
    mutation deleteEvent($id: ID!) {
        deleteEvent(id: $id) {
            _id
            eventTitle
        }
    }
`;

export const ADD_COMMENT = gql`
    mutation addComment($eventId: ID!, $commentBody: String!) {
        addComment(eventId: $eventId, commentBody: $commentBody) {
            _id
            commentCount
            comment {
                _id
                commentBody
                createdAt
                username
            }
        }
    }
`;

export const UPDATE_COMMENT = gql`
    mutation updateComment($eventId: ID!, $commentBody: String!) {
        updateComment(eventId: $eventId, commentBody: $commentBody) {
            _id
            commentCount
            comment {
                _id
                commentBody
                createdAt
                username
            }
        }
    }
`;

export const DELETE_COMMENT = gql`
    mutation deleteComment($id: ID!) {
        deleteComment(id: $id) {
            _id
            commentBody
        }
    }
`;