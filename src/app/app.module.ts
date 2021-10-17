import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { ProduitsComponent } from './Pages/produits/produits.component';
import { ProduitsService } from './Shared/produits.service';
import { PventesComponent } from './Pages/pventes/pventes.component';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { ConfigurerComponent } from './Pages/configurer/configurer.component';
import { MarquesComponent } from './Pages/marques/marques.component';
import { CustumersComponent } from './Pages/custumers/custumers.component';
import { GerantsComponent } from './Pages/gerants/gerants.component';
import { FacturesComponent } from './Pages/factures/factures.component';
import { CmdesclientsComponent } from './Pages/cmdesclients/cmdesclients.component';
import { CmdesfournisComponent } from './Pages/cmdesfournis/cmdesfournis.component';
import { FournisseursComponent } from './Pages/fournisseurs/fournisseurs.component';
import { PromotionsComponent } from './Pages/promotions/promotions.component';
import { SouscategoriesComponent } from './Pages/souscategories/souscategories.component';
import { StocksComponent } from './Pages/stocks/stocks.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { SignupComponent } from './Pages/signup/signup.component';
import { TableprodComponent } from './Pages/tableprod/tableprod.component';
import { TokenInterceptor } from './Shared/token-interceptor';
import { AuthServiceService } from './Shared/auth-service.service';
import { PanierDropDownComponent } from './Pages/panier-drop-down/panier-drop-down.component';
import { ProduitDetailModalComponent } from './Pages/produit-detail-modal/produit-detail-modal.component';
import { NavbarComponent } from './Pages/navbar/navbar.component';
import { PayerComponent } from './Pages/payer/payer.component';
import { PiedpageComponent } from './Pages/piedpage/piedpage.component';
import { EnteteComponent } from './Pages/entete/entete.component';
import { ModalprodComponent } from './Pages/modalprod/modalprod.component';
import { MarquesaisieComponent } from './Pages/marquesaisie/marquesaisie.component';
import { ProduitEditComponent } from './Pages/produit-edit/produit-edit.component';




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
    ProduitsComponent,
    PventesComponent,
    CategoriesComponent,
    ConfigurerComponent,
    MarquesComponent,
    CustumersComponent,
    GerantsComponent,
    FacturesComponent,
    CmdesclientsComponent,
    CmdesfournisComponent,
    FournisseursComponent,
    PromotionsComponent,
    SouscategoriesComponent,
    StocksComponent,
    SignupComponent,
    TableprodComponent,
    PanierDropDownComponent,
    ProduitDetailModalComponent,
    NavbarComponent,
    PayerComponent,
    PiedpageComponent,
    EnteteComponent,
    ModalprodComponent,
    MarquesaisieComponent,
    ProduitEditComponent,
  
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    ProduitsService,
    AuthServiceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
