import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from '@dimasmds/react-redux-loading-bar';
import persistStore, {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import threadDetailReducer from './threadDetail/reducer';
import threadCategorySelectedReducer from './threadCategorySelected/reducer';
import isPreloadReducer from './isPreload/reducer';
import authUserReducer from './authUser/reducer';
import threadSearchReducer from './threadSearch/reducer';
import themeReducer from './theme/reducer';
import { authMiddleware } from './middlewares.js';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authUser', 'theme'],
  timeout: 12000,
};

const persistedReducer = persistReducer(persistConfig, (state, action) => {
  return {
    threads: threadsReducer(state?.threads, action),
    users: usersReducer(state?.users, action),
    leaderboards: leaderboardsReducer(state?.leaderboards, action),
    threadCategorySelected: threadCategorySelectedReducer(
      state?.threadCategorySelected,
      action
    ),
    threadSearch: threadSearchReducer(state?.threadSearch, action),
    threadDetail: threadDetailReducer(state?.threadDetail, action),
    loadingBar: loadingBarReducer(state?.loadingBar, action),
    isPreload: isPreloadReducer(state?.isPreload, action),
    authUser: authUserReducer(state?.authUser, action),
    theme: themeReducer(state?.theme, action),
  };
});

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authMiddleware),
});

const persistor = persistStore(store);

export { persistor };
export default store;
