import { createReducer } from '@reduxjs/toolkit';
import { setMovieList, loadFilms } from './action';
import { Film } from '../types/film';

type InitialState = {
  films: Film[],
  filteredFilmsGenre: Film[]
}

const initialState: InitialState = {
  films: [],
  filteredFilmsGenre: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setMovieList, (state, action) => {
      const currentGenre = action.payload;
      const allFilms = state.films;
      const filteredFilms: Film[] = allFilms.filter((film) => film.genre === currentGenre);
      state.filteredFilmsGenre = currentGenre === 'All genres' ? allFilms : filteredFilms;
    });
});

export { reducer };
