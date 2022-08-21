import { createReducer } from '@reduxjs/toolkit';
import { setMovieList, loadFilms, setDataLoadedStatus, requireAuth } from './action';
import { Film } from '../types/film';
import { AuthorizationStatus } from '../const';

type InitialState = {
  films: Film[],
  filteredFilmsGenre: Film[],
  isDataLoading: boolean,
  authorizationStatus: AuthorizationStatus
}

const initialState: InitialState = {
  films: [],
  filteredFilmsGenre: [],
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown
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
    })
    .addCase(requireAuth, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
