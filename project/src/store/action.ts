import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { AppRoute, AuthorizationStatus } from '../const';

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const setMovieList = createAction('main/setMovieList', (value) => ({
  payload: value,
}));

export const requireAuth = createAction<AuthorizationStatus>('user/requireAuth');

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');
