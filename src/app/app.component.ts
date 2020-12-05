import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ProduitsService } from './Shared/produits.service';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from './Shared/auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username: string;
  userrole: string;

  constructor(public authService: AuthServiceService,
    private router: Router
  ) {
    this.username = localStorage.getItem('username');
    this.userrole = localStorage.getItem('userrole');
  }
  opened = true;
  title = 'NCL *  Nutri-Cosmétique en Ligne';
  toggleSidebar() {
    this.opened = !this.opened;
  }
  Logout() {
    this.authService.clearUserInfo();
    const lienaccueil = 'login';
    window.open(lienaccueil, "_self");
  }
}
