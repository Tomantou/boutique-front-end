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
}
