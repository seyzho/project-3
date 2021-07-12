import React from 'react';
import { useParams } from 'react-router-dom';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_EVENT } from '../utils/queries';

const SingleEvent = props => {
  const { id: eventId } = useParams();

  const { loading, data } = useQuery(QUERY_EVENT, {
    variables: { id: eventId }
  });

  const event = data?.event || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {event.username}
          </span>{' '}
          event on {event.createdAt}
        </p>
        <div className="card-body">
          <p>{event.eventText}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
