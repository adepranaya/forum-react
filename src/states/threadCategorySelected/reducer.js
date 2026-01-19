import { ActionType } from './action';

function threadCategorySelectedReducer(threadCategorySelected = null, action = {}) {
  switch (action.type) {
  case ActionType.SET_CATEGORY_FILTER:
    return action.payload.threadCategorySelected;
  default:
    return threadCategorySelected;
  }
}

export default threadCategorySelectedReducer;
