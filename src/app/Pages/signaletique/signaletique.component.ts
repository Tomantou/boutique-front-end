import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ADDRCONFIG } from 'dns';
import { SignaletiqueService } from 'src/app/Shared/signaletique.service';
import { ToastrModule } from 'ngx-toastr'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'inspector';
import {from, Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signaletique',
  templateUrl: './signaletique.component.html',
  styleUrls: ['./signaletique.component.css'],
  providers: [SignaletiqueService]
})
export class SignaletiqueComponent implements OnInit {

  constructor(
    private SignalServ: SignaletiqueService,
    private router: Router
    ) { }

  ngOnInit(): void {

  }

  addconfig(formconfig: NgForm) {
      
      this.SignalServ.saveSignal(formconfig.value);
        
          const lienOuAller = ['accueil'];
          this.router.navigate(lienOuAller);
          console.log(formconfig.value);

  }
}