import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { signaletiques } from 'src/app/Models/signaletiques';
import { AuthServiceService } from 'src/app/Shared/auth-service.service';
import { ConfigurerService } from 'src/app/Shared/configurer.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  username: string;
  userrole: string;
  useremail: string;
  logoapp: string;
  public signaletic: signaletiques;
  public boutiqueContainer = environment.boutiqueContainer;
  
  constructor(
    public authService: AuthServiceService,
    private router: Router,
    private configservice: ConfigurerService
  ) {
    this.username = localStorage.getItem('username');
    this.userrole = localStorage.getItem('userrole');
    this.useremail = localStorage.getItem('useremail');
    this.logoapp = localStorage.getItem('logoapp');
  }

  opened = true;
  title = 'NCL *  Nutri-Cosmétique en Ligne';

  ngOnInit(): void {
    this.configservice.getSignaletique().subscribe(
      (signaletiques) => {
        if (signaletiques) {
          this.signaletic = signaletiques[0];
          // console.log('liste signaletiques', this.signaletic);
        }
      },
      (error) => {
        alert("probleme d'acces a l api categories");
      }
    );
  }

  toggleSidebar() {
    this.opened = !this.opened;
  }
  Logout() {
    this.authService.clearUserInfo();
    const lienaccueil = 'login';
    window.open(lienaccueil, '_self');
  }

  dropdownToggle() {
    document.getElementById('myDropdown').classList.toggle('show');
  }
}
