import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { SessionService } from '../services/session.service';

import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class PhoneApiService {

  constructor(
    private http: Http,
    private session: SessionService
  ) {}

  setOptionsApi() {
    let headers = new Headers({'Authorization': 'JWT ' + this.session.token });
    return new RequestOptions({ headers: headers});
  }

  getList() {
    return this.http.get(`${environment.BASE_URL}/api/phones`, this.setOptionsApi())
      .map((res) => res.json());
  }
  
  get(id) {
    return this.http.get(`${environment.BASE_URL}/api/phones/${id}`)
      .map((res) => res.json());
  }
  
  edit(phone) {
    return this.http.put(`${environment.BASE_URL}/api/phones/${phone.id}`, phone)
      .map((res) => res.json());
  }
  
  remove(id) {
    return this.http.delete(`${environment.BASE_URL}/api/phones/${id}`)
      .map((res) => res.json());
  }
}