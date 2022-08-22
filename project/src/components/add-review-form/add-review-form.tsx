import { SyntheticEvent, useState } from 'react';
import { Comment } from '../../types/comment';
import FilmRating from '../film-rating/film-rating';

function AddReviewForm(): JSX.Element {
  const [formData, setFormData] = useState({
    comment: '',
    date: '',
    id: 0,
    rating: 0,
    user: {
      id: 0,
      name: ''
    }
  } as Comment);

  const fieldChangeHandle = (evt: SyntheticEvent): void => {
    const { name, value } = evt.target as HTMLTextAreaElement;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form action="#" className="add-review__form">
      <FilmRating changeFormRating={fieldChangeHandle} formData={formData}></FilmRating>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={fieldChangeHandle}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default AddReviewForm;
