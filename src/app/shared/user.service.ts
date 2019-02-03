import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
@Injectable()
export class UserService {
rootURL = 'http://localhost:3273/';

  constructor(private http: HttpClient) { }
  registerUser(user: any) {
    const body = { FirstName: user.FirstName,
      LastName: user.LastName, Email: user.Email, Password: user.Password, UserName: user.UserName};
    return this.http.post(this.rootURL + 'api/user/register', body);
  }
}
