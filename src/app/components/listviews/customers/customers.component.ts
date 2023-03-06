import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomersService } from '../../../services/customers/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent  implements OnInit {
  
  CustomersList: any = [];

  ngOnInit() {
    this.getCustomers();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public customersService: CustomersService
  ) {}

  getCustomers() {
    return this.customersService.GetCustomers().subscribe((data: {}) => {
      this.CustomersList = data;
    })
  }

}
