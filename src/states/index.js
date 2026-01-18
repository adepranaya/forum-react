import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from '@dimasmds/react-redux-loading-bar';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import threadDetailReducer from './threadDetail/reducer';
import threadCategorySelectedReducer from './threadCategorySelected/reducer';
import isPreloadReducer from './isPreload/reducer';
import authUserReducer from './authUser/reducer';

const store = configureStore({
  reducer: {
    threads: threadsReducer,
    users: usersReducer,
    leaderboards: leaderboardsReducer,
    threadCategorySelected: threadCategorySelectedReducer,
    threadDetail: threadDetailReducer,
    loadingBar: loadingBarReducer,
    isPreload: isPreloadReducer,
    authUser: authUserReducer,
  },
});

export default store;
