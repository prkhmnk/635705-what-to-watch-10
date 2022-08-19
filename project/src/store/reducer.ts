import { createReducer } from '@reduxjs/toolkit';
import { setMovieList, loadFilms, setDataLoadedStatus, showMore, resetCount } from './action';
import { Film } from '../types/film';
import { FilmListCount } from '../const';

type InitialState = {
  films: Film[],
  filteredFilmsGenre: Film[],
  isDataLoading: boolean,
  count: number
}

const initialState: InitialState = {
  films: [],
  filteredFilmsGenre: [],
  isDataLoading: false,
  count: FilmListCount.MainPage
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
    .addCase(showMore, (state) => {
      state.count += FilmListCount.MainPage;
    })
    .addCase(resetCount, (state) => {
      state.count = FilmListCount.MainPage;
    });
});

export { reducer };
