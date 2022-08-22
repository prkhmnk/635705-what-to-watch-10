import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Film } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type SmallFilmCardProps = {
  setIdActiveFilm: (id: number) => void,
  film: Film,
}

function SmallFilmCard({ film, setIdActiveFilm }: SmallFilmCardProps): JSX.Element {
  const navigate = useNavigate();
  const { id, name, previewImage } = film;
  const [isPlayedPreview, setIsPlayedPreview] = useState(false);
  const [startPlay, setStartPlay] = useState(false);
  const onMouseOverHandler = () => {
    setIdActiveFilm(id);
    setStartPlay(true);
  };
  const onMouseOutHandler = () => {
    setStartPlay(false);
  };
  const onClickHandler = () => {
    navigate(`/films/${id}`);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (startPlay) {
      timer = setTimeout(() => {
        setIsPlayedPreview(true);
      }, 1000);
    } else {
      setIsPlayedPreview(false);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [startPlay]);
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
      onClick={onClickHandler}
    >
      <div className="small-film-card__image">
        {isPlayedPreview
          ? <VideoPlayer film={film} />
          : <img src={previewImage} alt={name} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
