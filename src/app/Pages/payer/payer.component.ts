import { Component, OnInit, Input } from '@angular/core';
import { render } from 'creditcardpayments/creditcardpayments';
import { ToastrService } from 'ngx-toastr'; 
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { async } from '@angular/core/testing';
import { init } from 'emailjs-com';
import { Router } from '@angular/router';
init('user_lLvauHdeiqzbURiuIdDNW');
@Component({
  selector: 'app-payer',
  templateUrl: './payer.component.html',
  styleUrls: ['./payer.component.css'],
})
export class PayerComponent implements OnInit {
  @Input() Totmont;
  @Input() numCmde;
  @Input() detailsCmde;
  constructor(
    private toastr: ToastrService,
     private router: Router)
   {}

  ngOnInit(): void {
    render({
      id: '#myPaypalButtons',
      currency: 'EUR',
      value: this.Totmont,
      onApprove: (detaiks) => {
        this.toastr.success(
          'Transaction réussié, un mail de confirmation vous été envoyé',
          'Notification!'
        );
        console.log(this.detailsCmde);
        var templateParams = {
          numCmde: this.numCmde,
          from_name: 'BOUTIKline',
          to_name: 'Antoine YAMTOINGAR',
          message: '',
          detailsCmde: this.detailsCmde,
          total: this.Totmont,
        };

        emailjs
          .send('service_upit166', 'template_h9oe2e8', templateParams)
          .then(
            function (response) {
              console.log('SUCCESS!', response.status, response.text);
            },
            function (error) {
              console.log('FAILED...', error);
            }
          );
      },
    });
    onError: (err) => {
      console.error('error from the onError callback', err);
    };
  }

  gotoPageAchats() {
    const lien = ['achats'];
    this.router.navigate(lien);
  }
}
