import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    editing: false,
    editingId: null
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
        }
    }
});

export default modeSlice.reducer;
export const { enterEditMode, leaveEditMode } = modeSlice.actions;