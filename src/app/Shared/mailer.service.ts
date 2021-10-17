
import { Injectable } from '@angular/core';
import * as nodemailer from 'nodemailer';
@Injectable({
  providedIn: 'root'
})
export class MailerService {

  constructor() { }


  envoiMail(){
      const nodemailer = require('nodemailer');
     var transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
         user: 'antoineissa2016@gmail.com',
         pass: 'you2016tube',
       },
     });

     var mailOptions = {
       from: 'antoineissa2016@gmail.com',
       to: 'toide67@hotmail.com',
       subject: 'TEST MAIL',
       text: 'Coucou, mail',
     };

     transporter.sendMail(mailOptions, function (error, info) {
       if (error) {
         console.log(error);
       } else {
         console.log('Email sent:', info.response);
       }
     });


  }



}
