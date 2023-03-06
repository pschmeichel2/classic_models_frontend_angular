import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { OrdersService } from '../../../services/orders/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  
  OrdersList: any = [];

  ngOnInit() {
    this.getOrders();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public ordersService: OrdersService
  ) {}

  getOrders() {
    return this.ordersService.GetOrders().subscribe((data: {}) => {
      this.OrdersList = data;
    })
  }

}
