/*Login request model*/
export class loginRequest {
  username: String;
  password: String;

  constructor(username: String, password: String) {
    this.username = username;
    this.password = password;
  }
}

/*Sign up request model*/
export class SignupRequest {
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

/*Forgot password request model*/
export class ForgotPasswordRequest {
  email: String;
  constructor(email: String) {
    this.email = email;
  }
}

/*Reset password request model*/
export class ResetPasswordRequest {
  newPassword: String;
  confirmPassword: String;
  constructor(newPassword: String, confirmPassword: String) {
    this.newPassword = newPassword;
    this.confirmPassword = confirmPassword;
  }
}
