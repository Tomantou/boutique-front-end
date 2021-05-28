import { Component, OnInit } from '@angular/core';
import { SouscategoriesService } from 'src/app/Shared/souscategories.service';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http'; 
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { souscategorie } from 'src/app/Models/souscategorie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-souscategories',
  templateUrl: './souscategories.component.html',
  styleUrls: ['./souscategories.component.css'],
  providers: [SouscategoriesService],
})
export class SouscategoriesComponent implements OnInit {
  lessouscategories: souscategorie[];
  constructor(
    public souscategorieservice: SouscategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.souscategorieservice.getsousCategories().subscribe(
      (souscategories) => {
        this.lessouscategories = souscategories;
        console.log('liste sous categories', this.lessouscategories);
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
