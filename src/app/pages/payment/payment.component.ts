
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

// import { getMaxListeners } from 'cluster';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
 
  constructor() {

   
 }
 
 ngOnInit() {
    
}

/*THe below function perform all the input validations and call the 
orderService.createOrder rest api to save the order in the database */
}