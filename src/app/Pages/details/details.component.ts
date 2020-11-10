import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitsService } from 'src/app/Shared/produits.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private produitservice: ProduitsService,
    private router: Router) {}

  ngOnInit(): void {
  }
  
  Goaccueil() {
      const link= ['accueil'];
       this.router.navigate(link);
  }
}
/* 
$(document).ready(function(){
  //-- Click on detail
  $("ul.menu-items > li").on("click",function(){
      $("ul.menu-items > li").removeClass("active");
      $(this).addClass("active");
  })

  $(".attr,.attr2").on("click",function(){
      var clase = $(this).attr("class");

      $("." + clase).removeClass("active");
      $(this).addClass("active");
  })

  //-- Click on QUANTITY
  $(".btn-minus").on("click",function(){
      var now = $(".section > div > input").val();
      if ($.isNumeric(now)){
          if (parseInt(now) -1 > 0){ now--;}
          $(".section > div > input").val(now);
      }else{
          $(".section > div > input").val("1");
      }
  })            
  $(".btn-plus").on("click",function(){
      var now = $(".section > div > input").val();
      if ($.isNumeric(now)){
          $(".section > div > input").val(parseInt(now)+1);
      }else{
          $(".section > div > input").val("1");
      }
  })                        
})  */