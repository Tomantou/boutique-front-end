import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  opened = true;
  title = 'NCL *  Nutri-Cosmétique en Ligne';
  toggleSidebar(){
    this.opened = !this.opened; 
  }
  ngOnInit(): void {
    this.toggleSidebar();
  }

}
