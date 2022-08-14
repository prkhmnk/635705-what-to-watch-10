import { createReducer } from '@reduxjs/toolkit';
import { genreСhange, setMovieList } from './action';
import { Genre } from '../const';
import { films } from '../mocks/films';

const initialState = {
  genre: Genre.AllGenres,
  movieList: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(genreСhange, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setMovieList, (state) => {
      state.movieList = films.filter((film) => film.genre === state.genre);
    });
});

export { reducer };
