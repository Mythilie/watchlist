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
    addMovies: (state, action) => {
      state.items = [...action.payload]
    },
    removeMovie: (state, action) => {
      const indexToRemove = action.payload;
      state.items.splice(indexToRemove, 1);
    },
    // getAllMovieList: (state, action) => {
    //   return state.items;
    // },
  },
});

export const { addMovie, removeMovie, getAllMovieList, addMovies } = listSlice.actions;

export default listSlice.reducer;
