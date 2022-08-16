export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Tab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export enum Genre {
  'All genres' = 'All genres',
  'Comedy' = 'Comedies',
  'Crime' = 'Crime',
  'Documentary' = 'Documentary',
  'Drama' = 'Dramas',
  'Horror' = 'Horror',
  'Kids & Family' = 'Kids & Family',
  'Romance' = 'Romance',
  'Sci-Fi' = 'Sci-Fi',
  'Thriller' = 'Thrillers'
}

export enum FilmListCount {
  MainPage = 8,
  FilmPage = 4
}

export const VIDEO_TIMEOUT = 1000;
