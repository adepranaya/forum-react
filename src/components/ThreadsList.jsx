import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem.jsx';

function ThreadsList({ threads, like }) {
  return (
    <div className='flex flex-col gap-4'>
      {
        threads.map((thread) => (
          <ThreadItem key={thread.id} {...thread} like={like} />
        ))
      }
    </div>
  );
}

export default ThreadsList;
