import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CustomersService } from '../../../services/customers/customers.service';

import { Customer } from '../../../services/customers/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
  
  customer: Customer = new Customer();
  ordersList: any = [];
  customerNumberFromRoute: string = '';

  constructor(
    private route: ActivatedRoute,
    public customersService: CustomersService,
    ) { }

  ngOnInit() {    
    const routeParams = this.route.snapshot.paramMap;
    this.customerNumberFromRoute = routeParams.get('customerNumber') as string;
    
    this.getCustomer(this.customerNumberFromRoute);
    this.getOrders(this.customerNumberFromRoute);
  }

  getCustomer(customerNumber: string) {
    return this.customersService.GetCustomer(customerNumber).subscribe((data: Customer) => {
      this.customer = data;
    })
  }

  getOrders(customerNumber: string) {
    return this.customersService.GetOrders(customerNumber).subscribe((data: {}) => {
      this.ordersList = data;
    })
  }

}
