import dayjs from 'dayjs';
import { AxiosResponse } from 'axios';
import { StatusCodeMapping } from './const';

export const getDate = (data: string): string => dayjs(data).format('MMMM D, YYYY');

export const getDateTime = (data: string): string => dayjs(data).format('YYYY-MM-DD');

export const getRatingLevel = (rating: number): string => {
  if (rating >= 0 && rating <= 3) {
    return 'Bad';
  } else if (rating > 3 && rating <= 5) {
    return 'Normal';
  } else if (rating > 5 && rating <= 8) {
    return 'Good';
  } else if (rating > 8 && rating < 10) {
    return 'Very good';
  } else if (rating === 10) {
    return 'Awesome';
  }
  return '';
};

export const getRunTime = (mins: number): string => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  return `${hours}h ${minutes}m`;
};

export const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];
