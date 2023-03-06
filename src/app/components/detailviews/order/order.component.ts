import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OrdersService } from '../../../services/orders/orders.service';

import { Order } from '../../../services/orders/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  
  order: Order = new Order();
  OrderDetailsList: any = [];
  orderNumberFromRoute: string = '';

  constructor(
    private route: ActivatedRoute,
    public ordersService: OrdersService,
    ) { }

  ngOnInit() {    
    const routeParams = this.route.snapshot.paramMap;
    this.orderNumberFromRoute = routeParams.get('orderNumber') as string;
    
    this.getOrder(this.orderNumberFromRoute);
    this.getOrderDetails(this.orderNumberFromRoute);
  }

  getOrder(orderNumber: string) {
    return this.ordersService.GetOrder(orderNumber).subscribe((data: Order) => {
      this.order = data;
    })
  }

  getOrderDetails(orderNumber: string) {
    return this.ordersService.GetOrderDetails(orderNumber).subscribe((data: {}) => {
      this.OrderDetailsList = data;
    })
  }

  handleClickCustomer() {

  }
}
