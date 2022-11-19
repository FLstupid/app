import { Movie } from './Movie';
import { Theater } from './Theater';

export class ShowTime {
  showDate?: Date;
  timeStart?: String;
  timeEnd?: String;
  price?: Number;
  movie?: Movie[];
  theater?: Theater[];
}
