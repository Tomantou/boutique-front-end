import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HttpErrorResponse, HttpClientJsonpModule, HttpHeaders } from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from 'ng-sidebar';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { AchatsComponent } from './Pages/achats/achats.component';
import { NewsComponent } from './Pages/news/news.component';
import { PromosComponent } from './Pages/promos/promos.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { LoginComponent } from './Pages/login/login.component';
import { DetailsComponent } from './Pages/details/details.component';
import { PanierComponent } from './Pages/panier/panier.component';
import { ConfigurationComponent } from './Pages/configuration/configuration.component';
import { ProduitsComponent } from './Pages/produits/produits.component';
import { ProduitsService } from './Shared/produits.service';
import { PventesComponent } from './Pages/pventes/pventes.component';
import { SignaletiqueComponent } from './Pages/signaletique/signaletique.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AchatsComponent,
    NewsComponent,
    PromosComponent,
    ContactComponent,
    LoginComponent,
    DetailsComponent,
    PanierComponent,
    ConfigurationComponent,
    ProduitsComponent,
    PventesComponent,
    SignaletiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  
    
    
  ],
  providers: [ProduitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
