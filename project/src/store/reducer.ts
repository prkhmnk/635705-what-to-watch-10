import { createReducer } from '@reduxjs/toolkit';
import { genreСhange, setMovieList } from './action';
import { Genre } from '../const';
import { Film } from '../types/film';
import { films } from '../mocks/films';

const initialState: {
  genre: keyof typeof Genre,
  movieList: Film[]
} = {
  genre: 'All genres',
  movieList: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(genreСhange, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setMovieList, (state) => {
      if (state.genre === Genre['All genres']) {
        state.movieList = films;
        return;
      }
      state.movieList = films.filter((film) => Genre[film.genre as keyof typeof Genre] === state.genre);
    });
});

export { reducer };
