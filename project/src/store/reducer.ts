import { createReducer } from '@reduxjs/toolkit';
import { setMovieList, loadFilms, setDataLoadedStatus } from './action';
import { Film } from '../types/film';

type InitialState = {
  films: Film[],
  filteredFilmsGenre: Film[],
  isDataLoading: boolean
}

const initialState: InitialState = {
  films: [],
  filteredFilmsGenre: [],
  isDataLoading: false,
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
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoading = action.payload;
    });
});

export { reducer };
