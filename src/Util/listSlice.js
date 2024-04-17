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
      const Title = action.payload;
      state.items = state.items.filter((item) => 
      item.Title !== Title);
    },
    getAllMovieList: (state) => {
      return [...state.items];
    },
  },
});

export const { addMovie, removeMovie, getAllMovieList, addMovies } = listSlice.actions;

export default listSlice.reducer;
