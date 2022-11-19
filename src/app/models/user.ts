import { Role } from './Role';

export class User {
  firstName?: String;
  lastName?: String;
  phoneNumber?: String;
  email?: String;
  password?: String;
  gender?: String;
  roles?: Role[];
}
