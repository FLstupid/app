import { User } from './User';

export class Order {
  date?: Date;
  time?: String;
  user?: User[];
  isPaid?: Boolean;
  total?: Number;
}
