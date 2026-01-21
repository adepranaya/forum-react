import React from 'react';

function CurrentVote({ currentVote }) {
  return (
    <div className="mt-1">
      {currentVote && (
        <span
          className={`text-sm ${
            currentVote === 'up' ? 'text-primary' : 'text-red-500'
          } font-medium`}
        >
          You {currentVote === 'up' ? 'up' : 'down'}voted this thread
        </span>
      )}
    </div>
  );
}

export default CurrentVote;
