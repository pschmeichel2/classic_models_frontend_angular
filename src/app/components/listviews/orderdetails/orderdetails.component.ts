import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { OrderdetailsService } from '../../../services/orderdetails/orderdetails.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent  implements OnInit {
  
  OrderDetailsList: any = [];

  ngOnInit() {
    this.getOrderDetails();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public orderDetailsService: OrderdetailsService
  ) {}

  getOrderDetails() {
    return this.orderDetailsService.GetOrderDetails().subscribe((data: {}) => {
      this.OrderDetailsList = data;
    })
  }

}
