const ActionType = {
  SET_CATEGORY_FILTER: 'SET_CATEGORY_FILTER',
};

function setCategoryFilterActionCreator(threadCategorySelected) {
  return {
    type: ActionType.SET_CATEGORY_FILTER,
    payload: {
      threadCategorySelected,
    },
  };
}

export {
  ActionType,
  setCategoryFilterActionCreator,
};
