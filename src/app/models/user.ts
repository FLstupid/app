/*User request model*/
export class User {
  firstName: String;
  lastName: String;
  phoneNumber: String;
  email: String;
  password: String;
  gender: String;
  constructor(
    firstName: String,
    lastName: String,
    phoneNumber: String,
    email: String,
    password: String,
    gender: String
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.gender = gender;
  }
}
