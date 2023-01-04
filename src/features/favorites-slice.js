import { createSlice } from "@reduxjs/toolkit";

const initialState = { books: [], };

const favoritesSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite: (state, { payload }) => {
            payload = {...payload, isFavorite: true};
            state.books = [payload, ...state.books];
        },
        removeFavorite: (state, { payload }) => {
            const index = state.books.findIndex((b) => b.id == payload);
            if (index !== -1)
                state.books.splice(index, 1);
        }
    }
});

export default favoritesSlice.reducer;
export const { addFavorite, removeFavorite } = favoritesSlice.actions;