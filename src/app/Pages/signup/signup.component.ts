import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccountModel } from 'src/app/Models/user';
import { AuthServiceService } from 'src/app/Shared/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user: UserAccountModel;
  public passwordDuplicate: string;

  constructor(public authService: AuthServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.user = new UserAccountModel;
  }

  public onClickSave() {
    this.authService.Register(this.user).subscribe(result => {
        this.user = result.data;
        const lienaccueil = 'login';
        this.router.navigateByUrl(lienaccueil);
    }, error => {
            //this.alertSerice.error("Error registering user", error.message);
    });
}

}
