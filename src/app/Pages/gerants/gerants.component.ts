import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  GerantsService } from 'src/app/Shared/gerants.service';
import { PventeServiceService } from 'src/app/Shared/pvente-service.service';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http'; 
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { gerant } from  'src/app/Models/gerant';
import { pointsvente } from 'src/app/Models/pointsvente';
import { Router } from '@angular/router';
import { categorie } from 'src/app/Models/categorie';


@Component({
  selector: 'app-gerants',
  templateUrl: './gerants.component.html',
  styleUrls: ['./gerants.component.css'],
  providers: [GerantsService, PventeServiceService],
})
export class GerantsComponent implements OnInit {
  public lesgerants: gerant[];
  public lespointventes: pointsvente[];
  public selectedPvente: pointsvente;
  public formData: gerant;
  public lescategories: string[];
  errorMessage = '';

  constructor(
    private gerantsservice: GerantsService,
    private router: Router,
    private pointventeservice: PventeServiceService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.lescategories = ['A', 'B', 'E'];
    this.formData = new gerant();
    this.selectedPvente = new pointsvente();
    this.gerantsservice.getGerants().subscribe(
      (gerants) => {
        this.lesgerants = gerants;
        console.log('liste gerants', this.lesgerants);
      },
      (error) => {
        alert("probleme d'acces a l api");
      }
    );

    this.pointventeservice.getPVENTES().subscribe(
      (pointventes) => {
        this.lespointventes = pointventes;
        console.log('POINTS DE VENTE', this.lespointventes);
        //alert('c\'est ok Bravo!!!!');
      },
      (error) => {
        alert("probleme d'acces a l api");
      }
    );
  }

  addGerant(formgerant: NgForm) {
    console.log(formgerant.value);
    this.gerantsservice.saveGerant(formgerant.value).subscribe(
      (reponse) => {
        /*  const link = ['configurer'];
             this.router.navigate(link); */
      },
      (error) => {
        this.errorMessage =
          "Problème de connexion à votre serveur, prière contacter l'administrateur";
        console.log(error);
      }
    );
    this.toastr.success('Gérant enregistrée avec succès', 'Notification!');
  }

  resetButton(form?: NgForm) {
    if (form != null) form.reset();
    this.formData = {
      Id: 0,
      pointventeId: 0,
      categorie: '',
      nom: '',
      prenoms: '',
      contact: '',
      email: '',
      roleId: 0,
    };
    this.toastr.success('formulaire réinitialisé', 'Notification!');
  }
  retouralaccueil() {
    const lien = ['accueil'];
    this.router.navigate(lien);
  }

  getSelectedPvente<pointsvente>(pvid: number) {
    return (this.selectedPvente = this.lespointventes.find((p) => p.Id == pvid));
  }
}
