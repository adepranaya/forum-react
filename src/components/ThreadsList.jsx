import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem.jsx';

function ThreadsList({ threads }) {
  return (
    <div className='flex flex-col gap-4'>
      {
        threads.map((thread) => (
          <ThreadItem key={thread.id} {...thread} />
        ))
      }
    </div>
  );
}
ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    user: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
    totalVotes: PropTypes.number,
    totalComments: PropTypes.number,
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
};

export default ThreadsList;
