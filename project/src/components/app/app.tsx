import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  title: string,
  genre: string,
  date: number,
}

function App({ title, genre, date }: AppProps): JSX.Element {
  return (
    <MainPage
      title={title}
      genre={genre}
      date={date}
    />
  );
}

export default App;
