import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    editing: false,
    editingId: null,
    adding: false,
    showFilters: false,
    selecting: false,
    selectingFavorites: false,
    filterDateBefore: null,
    filterDateAfter: null,
    filterMinRating: null,
};

const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        enterEditMode: (state, { payload }) => {
            state.editing = true;
            state.editingId = payload;
        },
        leaveEditMode: (state) => {
            state.editing = false;
            state.editingId = null;
        },
        toggleAddMode: (state) => {
            state.adding = !state.adding;
        },
        toggleShowFilters: (state) => {
            state.showFilters = !state.showFilters;
        },
        toggleSelectMode: (state) => {
            state.selecting = !state.selecting;
        },
        toggleSelectFavoritesMode: (state) => {
            state.selectingFavorites = !state.selectingFavorites;
        },
        setFilterDateBefore: (state, { payload }) => {
            state.filterDateBefore = payload;
        },
        setFilterDateAfter: (state, { payload }) => {
            state.filterDateAfter = payload;
        },
        setFilterMinRating: (state, { payload }) => {
            state.filterMinRating = payload;
        }
    }
});

export default modeSlice.reducer;
export const { enterEditMode, leaveEditMode, toggleAddMode, toggleSelectMode, toggleShowFilters, toggleSelectFavoritesMode, setFilterDateAfter, setFilterDateBefore, setFilterMinRating } = modeSlice.actions;