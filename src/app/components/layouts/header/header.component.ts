import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(<string>localStorage.getItem("user"))
  }
  logout() {
    this.authService.logout().subscribe(res => {
      localStorage.clear()
      this.router.navigate(["auth"])
    })
  }


}
