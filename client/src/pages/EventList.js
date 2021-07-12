import React from 'react';
import EventList from '../components/EventList';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME_BASIC, QUERY_EVENTS } from '../utils/queries';

const EventList = () => {
    const { loading, data } = useQuery(QUERY_EVENTS);
    const { data: userData } = useQuery(QUERY_ME_BASIC);
    const events = data?. events || [];
  
    const loggedIn = Auth.loggedIn();
  
    return (
      <main>
        <div className="flex-row justify-space-between">
          <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <EventList events={events} title="List of Events..." />
            )}
          </div>
          {loggedIn && userData ? (
            <div className="col-12 col-lg-3 mb-3">
              <AssociateList
                username={userData.me.username}
                associateCount={userData.me.associateCount}
                associates={userData.me.associates}
              />
            </div>
          ) : null}
        </div>
      </main>
    );
  };
  
  export default EventList;