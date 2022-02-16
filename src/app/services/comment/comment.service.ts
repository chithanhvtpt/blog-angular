import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  getAllComment(id: any): Observable<any> {
    return this.http.get(
      environment.api_url + "/comments" + `/${id}`, {headers: this.authService.setHeader()}
    )
  }
  comment(data: any): Observable<any> {
    return this.http.post(
      environment.api_url + "/comments", data, {headers: this.authService.setHeader()}
    )
  }
}
