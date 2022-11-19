import { Genre } from './Genre';

export class Movie {
  name?: String;
  duration?: Number;
  description?: String;
  image?: String;
  trailer?: String;
  releases?: Date;
  genres?: Genre[];
  isShowing?: Boolean;
  isComing?: Boolean;
  isDisplay?: Boolean;
}
