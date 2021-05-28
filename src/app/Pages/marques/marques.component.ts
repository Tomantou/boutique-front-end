import { Component, OnInit } from '@angular/core';
import {  MarquesService } from 'src/app/Shared/marques.service';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http'; 
import { produit } from 'src/app/Models/produit'; 
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { marque } from 'src/app/Models/marque';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marques',
  templateUrl: './marques.component.html',
  styleUrls: ['./marques.component.css'],
  providers: [MarquesService],
})
export class MarquesComponent implements OnInit {
  lesmarques: marque[];
  origines: string[];
  constructor(public marquesservice: MarquesService,
             private router: Router) {}

  ngOnInit(): void {
    this.origines = [
      'AUSTRALIE',
      'ANGLETERRE',
      'ALLEMAGNE',
      'BELGIQUE',
      'FRANCE',
      'USA',
      'ITALIE',
      'ESPAGNE',
      'PORTUGAL',
      'SUISSE',
      'PAYS-BAS',
      'SUEDE',
      'POLOGNE',
      'JAPON',
      'CHINE',
      'RUSSIE',
      'COREE DU SUDd',
      'AFRIQUE DU SUD',
      'TCHAD',
      'CAMEROUN',
      "COTE D'IVOIRE",
    ];

    this.marquesservice.getMarques().subscribe(
      (marques) => {
        this.lesmarques = marques;
        console.log('liste marquess', this.lesmarques);
      },
      (error) => {
        alert("probleme d'acces a l api");
      }
    );
  }

  retouralaccueil() {
    const lien = ['accueil'];
    this.router.navigate(lien);
  }
}
