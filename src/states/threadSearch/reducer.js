import { ActionType } from './action';

function threadSearchReducer(threadSearch = '', action = {}) {
  switch (action.type) {
  case ActionType.SET_SEARCH_FILTER:
    return action.payload.threadSearch;
  default:
    return threadSearch;
  }
}

export default threadSearchReducer;
