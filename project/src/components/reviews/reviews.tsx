import Review from '../../components/review/review';
import { Comment } from '../../types/comment';

type ReviewsProps = {
  comments: Comment[]
}

function Reviews({ comments }: ReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.filter((_, index) => index % 2 === 0).map((comment) => (
          <Review key={comment.id} review={comment} />
        ))}
      </div>
      <div className="film-card__reviews-col">
        {comments.filter((_, index) => index % 2 !== 0).map((comment) => (
          <Review key={comment.id} review={comment} />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
