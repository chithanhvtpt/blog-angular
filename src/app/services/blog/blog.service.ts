import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  getAll() {
    return this.http.get(
      environment.api_url + "/blogs", {headers: this.authService.setHeader()}
    )
  }
  create(data: any): Observable<any> {
    return this.http.post(
      environment.api_url + "/blogs", data, {headers: this.authService.setHeader()}
    )
  }

  getById(id: number): Observable<any> {
    return this.http.get(
      environment.api_url + "/blogs" + `/${id}`, {headers: this.authService.setHeader()}
    )
  }
}
