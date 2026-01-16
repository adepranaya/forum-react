import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from '@dimasmds/react-redux-loading-bar';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    threads: threadsReducer,
    users: usersReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
