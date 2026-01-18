const ActionType = {
  SET_SEARCH_FILTER: 'SET_SEARCH_FILTER',
};

function setSearchFilterActionCreator(threadSearch) {
  return {
    type: ActionType.SET_SEARCH_FILTER,
    payload: {
      threadSearch,
    },
  };
}

export {
  ActionType,
  setSearchFilterActionCreator,
};
