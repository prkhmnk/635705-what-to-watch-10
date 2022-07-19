import { Film } from '../../types/film';
import SmallFilmCard from '../../components/small-film-card/small-film-card';

type FilmsListProps = {
  films: Film[]
}

function FilmsList({ films }: FilmsListProps): JSX.Element {

  return (
    <div className="catalog__films-list">
      {films.map((film) => <SmallFilmCard film={film} key={film.name} />)}
    </div>
  );
}

export default FilmsList;
