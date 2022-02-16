import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  loginForm: FormGroup | any

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [""],
      password: [""]
    })
  }
  login() {
    let data = this.loginForm?.value
    this.authService.login(data).subscribe( res => {
      let token = res.access_token
      if (res.error) {
        res.message
      }else {
        this.router.navigate(["blogs"])
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(res.user))
      }
    })
  }

}
