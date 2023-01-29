import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";
import bookReducer from "../features/books-slice";
import modeReducer from "../features/mode-slice";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favoriteBooks', 'query'],
};

const persistedReducer = persistReducer(persistConfig, bookReducer);

const store = configureStore({
  reducer: {
    book: persistedReducer,
    mode: modeReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
export default store;