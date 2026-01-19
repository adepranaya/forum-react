const authMiddleware = (store) => (next) => (action) => {
  if (action.meta?.authRequired) {
    const { authUser } = store.getState();
    if (!authUser) {
      alert('You must be logged in to perform this action.');
      return;
    }
  }

  return next(action);
};

export { authMiddleware };
