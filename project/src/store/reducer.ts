import { createReducer } from '@reduxjs/toolkit';
import { Genre } from '../const';

const initialState = {
  genre: Genre.AllGenres,
  movieList: 0,
};

const reducer = createReducer(initialState, (builder) => {
  // actions
});

export { reducer };
