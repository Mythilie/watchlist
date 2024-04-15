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
      const indexToRemove = action.payload;
      state.items.splice(indexToRemove, 1);
    },
  },
});

export const { addMovie, removeMovie } = listSlice.actions;

export default listSlice.reducer;
