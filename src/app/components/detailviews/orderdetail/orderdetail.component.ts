
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OrderdetailsService } from '../../../services/orderdetails/orderdetails.service';

import { OrderDetail } from '../../../services/orderdetails/orderdetail';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit{
  
  orderDetail: OrderDetail = new OrderDetail();
  OrdersList: any = [];
  orderNumberFromRoute: string = '';
  productCodeFromRoute: string = '';

  constructor(
    private route: ActivatedRoute,
    public orderdetailsService: OrderdetailsService,
    ) { }

  ngOnInit() {    
    const routeParams = this.route.snapshot.paramMap;
    this.orderNumberFromRoute = routeParams.get('orderNumber') as string;
    this.productCodeFromRoute = routeParams.get('productCode') as string;
    
    this.getOrderDetail(this.orderNumberFromRoute, this.productCodeFromRoute);
    //this.getOrders(this.employeeNumberFromRoute);
  }

  getOrderDetail(orderNumber: string, productCode: string) {
    return this.orderdetailsService.GetOrderDetail(orderNumber, productCode).subscribe((data: OrderDetail) => {
      this.orderDetail = data;
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
