import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { AchatsComponent } from './Pages/achats/achats.component';
import { NewsComponent } from './Pages/news/news.component';
import { PromosComponent } from './Pages/promos/promos.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { LoginComponent } from './Pages/login/login.component';
import { DetailsComponent} from './Pages/details/details.component';
import { PanierComponent} from './Pages/panier/panier.component';
import { ProduitsComponent } from './Pages/produits/produits.component';
import { PventesComponent } from './Pages/pventes/pventes.component';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { ConfigurerComponent } from './Pages/configurer/configurer.component';
import { SouscategoriesComponent } from './Pages/souscategories/souscategories.component';
import { GerantsComponent } from './Pages/gerants/gerants.component';
import { MarquesComponent } from './Pages/marques/marques.component';
import { CustumersComponent } from './Pages/custumers/custumers.component';
import { FournisseursComponent } from './Pages/fournisseurs/fournisseurs.component';
import { CmdesclientsComponent } from './Pages/cmdesclients/cmdesclients.component';
import { PromotionsComponent } from './Pages/promotions/promotions.component';
import { CmdesfournisComponent } from './Pages/cmdesfournis/cmdesfournis.component';
import { FacturesComponent } from './Pages/factures/factures.component';
import { StocksComponent } from './Pages/stocks/stocks.component';
import { SignupComponent } from './Pages/signup/signup.component';

const routes: Routes = [
  {path: '', component: AccueilComponent
  },
  {path: 'accueil', component: AccueilComponent
  },
  {path: 'achats', component: AchatsComponent
  },
  {path: 'news', component: NewsComponent
  },
  {path: 'promos', component: PromosComponent
  },
  {path: 'contact', component: ContactComponent
  },
  {path: 'login', component: LoginComponent
  },
  {path: 'details', component: DetailsComponent
  },
  {path: 'panier', component: PanierComponent
  },
  {path: 'produits', component:  ProduitsComponent
  },
  {path: 'pventes', component:  PventesComponent
  },
  {path: 'categories', component:  CategoriesComponent
  },
  {path: 'souscategories', component:  SouscategoriesComponent
  },
  {path: 'configurer', component:  ConfigurerComponent
  },
  {path: 'gerants', component:  GerantsComponent
  },
  {path: 'marques', component:  MarquesComponent
  },
  {path: 'custumers', component:  CustumersComponent
  },
  {path: 'fournisseurs', component:  FournisseursComponent
  },
  {path: 'factures', component:  FacturesComponent
  },
  {path: 'cmdesclients', component:  CmdesclientsComponent
  },
  {path: 'cmdesfournis', component:  CmdesfournisComponent
  },
  {path: 'promotions', component:  PromotionsComponent
  },
  {path: 'stocks', component:  StocksComponent
  },
  {path: 'signup', component:  SignupComponent
  }
];

  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
