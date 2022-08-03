import { Fragment } from 'react';
import { Film } from '../../types/film';
import { getRatingLevel } from '../../common';

type OverviewProps = {
  film: Film
}

function Overview({ film: { rating, scoresCount, description, director, starring } }: OverviewProps): JSX.Element {
  return (
    <Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingLevel(rating)}</span>
          <span className="film-rating__count">`${scoresCount} ratings`</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>`Director: ${director}`</strong></p>

        <p className="film-card__starring"><strong>`Starring: ${starring.join(', ')} and other`</strong></p>
      </div>
    </Fragment>
  );
}

export default Overview;
