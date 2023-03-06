
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PaymentsService } from '../../../services/payments/payments.service';

import { Payment } from '../../../services/payments/payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  
  payment: Payment = new Payment();
  //OrdersList: any = [];
  customerNumberFromRoute: string = '';
  checkNumberFromRoute: string = '';

  constructor(
    private route: ActivatedRoute,
    public paymentsService: PaymentsService,
    ) { }

  ngOnInit() {    
    const routeParams = this.route.snapshot.paramMap;
    this.customerNumberFromRoute = routeParams.get('customerNumber') as string;
    this.checkNumberFromRoute = routeParams.get('checkNumber') as string;
    
    this.getPayment(this.customerNumberFromRoute, this.checkNumberFromRoute);
    //this.getOrders(this.employeeNumberFromRoute);
  }

  getPayment(customerNumber: string, checkNumber: string) {
    return this.paymentsService.GetPayment(customerNumber, checkNumber).subscribe((data: Payment) => {
      this.payment = data;
    })
  }
/*
  getOrders(orderNumber: string) {
    return this.ordersService.GetOrders(orderNumber).subscribe((data: {}) => {
      this.OrdersList = data;
    })
  }
*/
}
