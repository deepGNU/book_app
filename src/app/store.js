import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books-slice";
import modeReducer from "../features/mode-slice";

const store = configureStore({
    reducer: {
        book: bookReducer,
        mode: modeReducer
    }
});

export default store;