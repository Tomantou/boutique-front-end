import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ADDRCONFIG } from 'dns';
import { ConfigserviceService } from 'src/app/Shared/configservice.service';
import { ToastrModule } from 'ngx-toastr'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'inspector';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css'],
  providers: [ConfigserviceService]
})
export class ConfigurationComponent implements OnInit {

  constructor(
    private configServ: ConfigserviceService,
    private router: Router
    ) { }

  ngOnInit(): void {

  }

  addconfig(formconfig: NgForm) {
      
      this.configServ.saveConfig(formconfig.value);
        
          const lienOuAller = ['accueil'];
          this.router.navigate(lienOuAller);
          console.log(formconfig.value);
              
 }
      
      
      
      
  

}
