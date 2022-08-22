import { useState } from 'react';
import { Film } from '../../types/film';
import SmallFilmCard from '../../components/small-film-card/small-film-card';

type FilmsListProps = {
  films: Film[]
}

function FilmsList({ films }: FilmsListProps): JSX.Element {
  const [, setIdActiveFilm] = useState(0);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <SmallFilmCard
          setIdActiveFilm={setIdActiveFilm}
          film={film}
          key={film.id + film.name}
        />
      ))}
    </div>
  );
}

export default FilmsList;
