import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type SmallFilmCardProps = {
  activeId: number | null,
  film: Film,
  mouseOverHandler: (id: number) => void;
  mouseOutHandler: () => void;
}

function SmallFilmCard({
  activeId,
  film: {
    previewImage,
    previewVideoLink,
    name,
    id
  },
  mouseOverHandler,
  mouseOutHandler
}: SmallFilmCardProps): JSX.Element {

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={(): void => mouseOverHandler(id)}
      onMouseOut={mouseOutHandler}
    >
      <div className="small-film-card__image">
        {activeId === id ? (
          <VideoPlayer activeId={activeId} previewImage={previewImage} previewVideoLink={previewVideoLink} />
        ) : (
          <img src={previewImage} alt={name} width="280" height="175" />
        )}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
