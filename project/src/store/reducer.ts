import { createReducer } from '@reduxjs/toolkit';
import { genreСhange, setMovieList, showMore } from './action';
import { Genre } from '../const';
import { Film } from '../types/film';
import { films } from '../mocks/films';
import { FilmListCount } from '../const';

const initialState: {
  genre: keyof typeof Genre,
  movieList: Film[],
  count: number
} = {
  genre: 'All genres',
  movieList: films,
  count: FilmListCount.MainPage
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(genreСhange, (state, action) => {
      state.genre = action.payload;
      state.count = FilmListCount.MainPage;
    })
    .addCase(setMovieList, (state) => {
      if (state.genre === Genre['All genres']) {
        state.movieList = films;
        return;
      }
      state.movieList = films.filter((film) => Genre[film.genre as keyof typeof Genre] === state.genre);
    })
    .addCase(showMore, (state) => {
      state.count += FilmListCount.MainPage;
    });
});

export { reducer };
