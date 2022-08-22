import React, { SyntheticEvent } from 'react';
import Star from './star';
import { MAX_RATING_FILM } from '../../const';
import { Comment } from '../../types/comment';

type FilmRatingProp = {
  formData: Comment,
  changeFormRating: (event: SyntheticEvent) => void
}

function FilmRating({ changeFormRating, formData }: FilmRatingProp): JSX.Element {
  const arrayStars = [...new Array(MAX_RATING_FILM)].map((value, index) => MAX_RATING_FILM - index);
  const curentRating = Number(formData.rating);
  return (
    <div className="rating">
      <div className="rating__stars">
        {arrayStars.map((value) => (<Star key={`star${value}`} value={value} changeFormRating={changeFormRating} checked={value === curentRating} />))}
      </div>
    </div>
  );
}

export default FilmRating;
