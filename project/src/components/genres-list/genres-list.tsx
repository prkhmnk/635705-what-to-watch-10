import { SyntheticEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { setMovieList } from '../../store/action';

type GenresListProps = {
  genresFilms: string[]
}

function GenresList({ genresFilms }: GenresListProps): JSX.Element {
  const [activeGenre, setActiveGenre] = useState(genresFilms[0]);
  const dispatch = useAppDispatch();
  const onClickHandler = (e: SyntheticEvent, genre: string) => {
    e.preventDefault();
    setActiveGenre(genre);
  };
  useEffect(() => {
    dispatch(setMovieList(activeGenre));
  }, [activeGenre, dispatch]);

  return (
    <ul className="catalog__genres-list">
      {genresFilms.map((genre) => (
        <li key={genre} className={genre !== activeGenre ? 'catalog__genres-item' : 'catalog__genres-item catalog__genres-item--active'}>
          <a href="/" className="catalog__genres-link" onClick={(e) => onClickHandler(e, genre)}>{genre}</a>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
