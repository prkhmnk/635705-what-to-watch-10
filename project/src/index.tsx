import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';

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
    <Provider store={store}>
      <App
        title={Setting.title}
        genre={Setting.genre}
        date={Setting.date}
        films={films}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode >,
);
