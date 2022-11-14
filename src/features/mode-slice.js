import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    editing: false,
    editingId: null,
    adding: false,
    showFilters: false,
    selecting: false,
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
        },
        toggleAddMode: (state) => {
            state.adding = !state.adding;
        },
        toggleSelectMode: (state) => {
            state.selecting = !state.selecting;
        },
        toggleShowFilters: (state) => {
            state.showFilters = !state.showFilters;
        }
    }
});

export default modeSlice.reducer;
export const { enterEditMode, leaveEditMode, toggleAddMode, toggleSelectMode, toggleShowFilters } = modeSlice.actions;