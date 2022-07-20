import { useState, MouseEvent } from 'react';
import { Film } from '../../types/film';
import SmallFilmCard from '../../components/small-film-card/small-film-card';

type FilmsListProps = {
  films: Film[]
}

function FilmsList({ films }: FilmsListProps): JSX.Element {

  const [activeId, setActiveId] = useState({
    id: '',
  });

  const mouseOverHandler = (evt: MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();
    const target = evt.target as HTMLDivElement;
    setActiveId({
      ...activeId,
      id: target.id,
    });
  };

  return (
    <div
      className="catalog__films-list"
      onMouseOver={mouseOverHandler}
    >
      {films.map((film) => (
        <SmallFilmCard
          film={film}
          key={film.id + film.name}
        />
      ))}
    </div>
  );
}

export default FilmsList;
