import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films } from './mocks/films';
import { reviews } from './mocks/reviews';

const Setting = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  date: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      title={Setting.title}
      genre={Setting.genre}
      date={Setting.date}
      films={films}
      reviews={reviews}
    />
  </React.StrictMode>,
);
