import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books-slice";
import modeReducer from "../features/mode-slice";
import favReducer from '../features/favorites-slice';
const store = configureStore({
    reducer: {
        book: bookReducer,
        fav: favReducer,
        mode: modeReducer
    }
});

export default store;