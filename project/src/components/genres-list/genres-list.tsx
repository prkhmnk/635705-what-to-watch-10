import { Link } from 'react-router-dom';
import { Genre } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { genreСhange, setMovieList } from '../../store/action';

function GenresList(): JSX.Element {

  const dispatch = useAppDispatch();
  const active = useAppSelector((state) => state.genre);

  return (
    <ul className="catalog__genres-list">
      {Object.values(Genre).map((item) => (
        <li key={item} className={`catalog__genres-item ${active === item && 'catalog__genres-item--active'}`}>
          <Link
            to="#"
            className="catalog__genres-link"
            onClick={
              (evt) => {
                evt.preventDefault();
                dispatch(genreСhange(item));
                dispatch(setMovieList());
              }
            }
          >{item}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
