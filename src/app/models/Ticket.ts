import { Seat } from './Seat';
import { ShowTime } from './ShowTime';

export class Ticket {
  seat?: Seat[];
  showTime?: ShowTime[];
  price?: Number;
  isSold?: Boolean;
}
