import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public http: HttpClient) { }

  loginUser(data): Observable<any> {
    return this.http.post('api/login', data);
  }

  registerUser(data): Observable<any> {
    return this.http.post('api/register', data);
  }
}
