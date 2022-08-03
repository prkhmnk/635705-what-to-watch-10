import { Comment } from '../../types/comment';
import { getDate, getDateTime } from '../../common';

type ReviewProps = {
  review: Comment
}

function Review({ review: { comment, user: { name }, date, rating } }: ReviewProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime={getDateTime(date)}>{getDate(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default Review;
