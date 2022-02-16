import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(user: any): Observable<any> {
    return this.http.post(
      environment.api_url + "/login", user
    )
  }

  setHeader() {
    let token = localStorage.getItem("token");
    return new HttpHeaders().set('Authorization', "Bearer " + token)
  }

  register(user: any): Observable<any>{
    return this.http.post(
      environment.api_url + "/register", user
    )
  }
  loginByGoogle(provider: any): Observable<any> {
    return this.http.get(
      environment.api_url + "/auth/redirect" + `/${provider}`, {headers: this.setHeader()}
    )
  }

  callBack(provider: any): Observable<any> {
    return this.http.get(
      environment.api_url + "callback" + `/${provider}`, {headers: this.setHeader()}
    )
  }

  logout():Observable<any> {
    return this.http.post(
      environment.api_url + "/logout", null, {headers: this.setHeader()}
    )
  }
}
