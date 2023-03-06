import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { PaymentsService } from '../../../services/payments/payments.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  
  PaymentsList: any = [];

  ngOnInit() {
    this.getPayments();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public paymentsService: PaymentsService
  ) {}

  getPayments() {
    return this.paymentsService.GetPayments().subscribe((data: {}) => {
      this.PaymentsList = data;
    })
  }

}
