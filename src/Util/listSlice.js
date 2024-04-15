import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: "list",
    initialState: {
        items: [],
    },
    reducers: {
        addMovie: (state, action) => {
            state.items.push(action.payload);
        },
        removeMovie: (state, action) => {
            state.items.pop();
        },
        // clearList: (state) => {
        //     state.items = [];
        // },
    },
});

export const { addMovie, removeMovie } = listSlice.actions;

export default listSlice.reducer;