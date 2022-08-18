import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const setMovieList = createAction('main/setMovieList', (value) => ({
  payload: value,
}));
