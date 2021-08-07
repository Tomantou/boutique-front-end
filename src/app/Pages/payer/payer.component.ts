import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditcardpayments';
@Component({
  selector: 'app-payer',
  templateUrl: './payer.component.html',
  styleUrls: ['./payer.component.css']
})
export class PayerComponent implements OnInit {

  constructor() {
      
   }

  ngOnInit(): void {
    render({
      id: '#myPaypalButtons',
      currency: 'USD',
      value: '500.00',
      onApprove: (detaiks) => {
        alert('Transaction réussie');
      },
    });
  }

}
