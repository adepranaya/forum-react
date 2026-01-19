function postedAt(date) {
  const now = new Date();
  const posted = new Date(date);
  const diff = now - posted;
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffSeconds = Math.floor(diff / 1000);

  if (diffDays > 0) {
    return `${diffDays} days ago`;
  }
  if (diffHours > 0) {
    return `${diffHours} hours ago`;
  }
  if (diffMinutes > 0) {
    return `${diffMinutes} minutes ago`;
  }
  if (diffSeconds > 0) {
    return `${diffSeconds} seconds ago`;
  }
  return 'just now';
}

const stripHtmlTags = (htmlString) => {
  return htmlString.replace(/<[^>]*>/g, '');
};

const getCurrentVote = (upVotesBy = [], downVotesBy = [], userId) => {
  if (!userId) return null;

  if (upVotesBy.includes(userId)) {
    return 'up';
  }

  if (downVotesBy.includes(userId)) {
    return 'down';
  }

  return null; // neutral
};

const withAuth = (thunkAction) => {
  return (...args) => {
    return (dispatch, getState) => {
      const { authUser } = getState();
      console.log('withAuth - authUser:', authUser);
      if (!authUser) {
        alert('You must be logged in to perform this action.');
        return Promise.resolve(); // Return empty promise
      }

      // Jalankan thunk asli
      return thunkAction(...args)(dispatch, getState);
    };
  };
};

export { postedAt, stripHtmlTags, getCurrentVote, withAuth };
