import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore, persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER, 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { combineReducers } from 'redux';
import bookReducer from "../features/books-slice";
import modeReducer from "../features/mode-slice";
import thunk from "redux-thunk";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favoriteBooks', 'query'],
};

const persistedReducer = persistReducer(persistConfig, bookReducer);

// const rootReducer = combineReducers({
//   book: persistedReducer,
//   mode: modeReducer,
// });

const store = configureStore({
  reducer: {
    book: persistedReducer,
    mode: modeReducer,
  },
  middleware: [thunk],
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

export const persistor = persistStore(store);
// const store = configureStore({
//     reducer: {
//         book: bookReducer,
//         fav: favReducer,
//         mode: modeReducer
//     }
// });

export default store;