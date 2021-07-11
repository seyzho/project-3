import React from 'react';
import { Link } from 'react-router-dom';

const AssociatesList = ({ associateCount, username, associates }) => {
  if (!associates || !associates.length) {
    return <p className="bg-dark text-light p-3">{username}, add some associates!</p>;
  }

  return (
    <div>
      <h5>
        {username}'s {associateCount} {associateCount === 1 ? 'associate' : 'associates'}
      </h5>
      {associates.map(associate => (
        <button className="btn w-100 display-block mb-2" key={associate._id}>
          <Link to={`/profile/${associate.username}`}>{associate.username}</Link>
        </button>
      ))}
    </div>
  );
};

export default AssociatesList;
