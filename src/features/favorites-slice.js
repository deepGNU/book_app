import { createSlice } from "@reduxjs/toolkit";

const initialState = { favoriteBooks: [] };

const favoritesSlice = createSlice({
    name: 'fav',
    initialState,
    reducers: {
        addFavorite: (state, { payload }) => {
            state.favoriteBooks = [payload, ...state.favoriteBooks];
        },
        removeFavorite: (state, { payload }) => {
            const index = state.favoriteBooks.findIndex(payload);
            state.favoriteBooks.splice(index, 1);
        }
    }
});

export default favoritesSlice.reducer;
export const { addFavorite, removeFavorite } = favoritesSlice.actions;