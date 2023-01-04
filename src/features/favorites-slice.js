import { createSlice } from "@reduxjs/toolkit";

const initialState = { favBooks: [], };

const favoritesSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite: (state, { payload }) => {
            payload = {...payload, isFavorite: true};
            state.favBooks = [payload, ...state.favBooks];
        },
        removeFavorite: (state, { payload }) => {
            const index = state.favBooks.findIndex((b) => b.id === payload);
            if (index !== -1)
                state.favBooks.splice(index, 1);
        }
    }
});

export default favoritesSlice.reducer;
export const { addFavorite, removeFavorite } = favoritesSlice.actions;