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
import { combineReducers } from 'redux';
import bookReducer from "../features/books-slice";
import modeReducer from "../features/mode-slice";
import favReducer from '../features/favorites-slice';
import thunk from "redux-thunk";

// const persistedReducer = persistReducer(
//   {
//     key: 'root', // The key for the persisted state
//     storage, // The storage engine to use (e.g. localStorage)

//   },
//   favReducer,
// );

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favoriteBooks'],
};

const persistedReducer = persistReducer(persistConfig, bookReducer);

const rootReducer = combineReducers({
  // book: bookReducer,
  // favorite: favReducer,
  // favorite: persistedReducer,
  book: persistedReducer,
  mode: modeReducer,
});

// const store = configureStore(persistedReducer);

const store = configureStore({
  // reducer: persistedReducer,
  reducer: rootReducer,
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