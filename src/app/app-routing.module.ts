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
import { ConfigurationComponent} from './Pages/configuration/configuration.component';
import { ProduitsComponent } from './Pages/produits/produits.component';
import { PventesComponent } from './Pages/pventes/pventes.component';

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
  {path: 'configuration', component: ConfigurationComponent
  },
  {path: 'produits', component:  ProduitsComponent
  },
  {path: 'pventes', component:  PventesComponent
  }
];

  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
