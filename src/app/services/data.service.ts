import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private userId?: String;
  private IsSignup: boolean = true;
  public isDisplayName: string = 'Login';

  constructor() {}

  // setting property for userId
  setUserId(id: String) {
    this.userId = id;
  }
  //get for userId
  getUserId() {
    return this.userId;
  }

  //set  display name in header
  setIsDisplayName(value: string) {
    this.isDisplayName = value;
  }
  //get  display name in header
  getIsDisplayName() {
    return this.isDisplayName;
  }
  //set signup boolean
  setIsSignup(value: boolean) {
    this.IsSignup = value;
  }
  //get  signup
  getIsSignup() {
    return this.IsSignup;
  }
}
