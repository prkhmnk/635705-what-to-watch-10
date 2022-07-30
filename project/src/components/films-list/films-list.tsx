import { useState } from 'react';
import { Film } from '../../types/film';
import SmallFilmCard from '../../components/small-film-card/small-film-card';

type FilmsListProps = {
  films: Film[]
}

function FilmsList({ films }: FilmsListProps): JSX.Element {

  const [activeId, setActiveId] = useState<number | null>(null);

  const mouseOverHandler = (filmId: number): void => setActiveId(filmId);
  const mouseOutHandler = (): void => setActiveId(null);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <SmallFilmCard
          activeId={activeId}
          mouseOverHandler={mouseOverHandler}
          mouseOutHandler={mouseOutHandler}
          film={film}
          key={film.id + film.name}
        />
      ))}
    </div>
  );
}

export default FilmsList;
