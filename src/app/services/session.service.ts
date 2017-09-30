import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class SessionService implements CanActivate{

  public token: String = '';
  public isAuth: boolean = false;
  public user = {};

  constructor(
    private http: Http,
    private router: Router
  ) {}

  validateToken() {
    let headers = new Headers({'Authorization': 'JWT ' + localStorage.getItem('token') });
    let options=  new RequestOptions({ headers: headers});
    return this.http.get(`${environment.BASE_URL}/token`, options)
      .toPromise()
      .then((res) => res.json())
      .then((data) => {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.isAuth = true;
        this.token = localStorage.getItem('token');
        return true;
      })
      .catch((err) => {
        this.router.navigate(['/login']);
        return false;
      })
  }

  canActivate() {
    if (localStorage.getItem('token')) {
      return this.validateToken();
    } else {
      //this.logout()
      this.router.navigate(['/login']);
      return false;
    }
  }

  login(user) {
    return this.http.post(`${environment.BASE_URL}/login`, user)
      .map((res) => res.json())
      .map((res) => {
        const { token, user } = res;
        console.log(res);

        if (token) {
          this.token = token;
          this.user = { _id : user._id , username: user.username };
          this.isAuth = true;
          
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));

          return true;
        
        } else {
          return false;
        }
      });
  }

}
