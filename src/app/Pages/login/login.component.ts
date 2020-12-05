import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Shared/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;

  ngOnInit(): void {
  }

  constructor(private authService: AuthServiceService,
    private router: Router) {
  }

  public onClickLogin() {
    this.authService.Login(this.username, this.password).subscribe(
      result => {
        if (result.access_token) {
          this.authService.setToken(result.access_token);

          this.RefreshUserInfo(this.username, this.password);
        }
      },
      error => {
      }
    );
  }

  public RefreshUserInfo(username: string, password: string) {
    this.authService.GetToken(username, password, "openid", "password").subscribe(result => {

      let headers = { "Authorization": "Bearer " + result.access_token }
      this.authService.GetUserInfo(result.access_token)
        .subscribe(userInfo => {
          if (userInfo.role === "BLOCKED") {
            this.authService.clearUserInfo();
            this.username = "";
            this.password = "";
          } else {
            this.authService.setUserinfo(userInfo);

            const lienaccueil = 'accueil';
            window.open(lienaccueil, "_self");
          }
        }, error => {
          this.authService.clearUserInfo();
        });

    }, error => {
      this.authService.clearUserInfo();
    });
  }

}
