import { Comment } from './comment';

export type Review = {
  filmId: number,
  comments: Comment[]
};
