import { Component, OnInit, Input } from '@angular/core';
import { render } from 'creditcardpayments/creditcardpayments';
@Component({
  selector: 'app-payer',
  templateUrl: './payer.component.html',
  styleUrls: ['./payer.component.css']
})
export class PayerComponent implements OnInit {
@Input() Totmont;
  constructor() {
      
   }

  ngOnInit(): void {
    render({
      id: '#myPaypalButtons',
      currency: 'EUR',
      value: this.Totmont,
      onApprove: (detaiks) => {
        alert('Transaction réussie');
      },
    });
       

  }

}
