import { createAction } from '@reduxjs/toolkit';

export const genreСhange = createAction('game/genreСhange', (value) => ({ payload: value }));

export const setMovieList = createAction('game/setMovieList');

export const showMore = createAction('film/showMore');
