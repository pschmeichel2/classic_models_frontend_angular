import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductsService } from '../../../services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  ProductsList: any = [];

  ngOnInit() {
    this.getProducts();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public productsService: ProductsService
  ) {}

  getProducts() {
    return this.productsService.GetProducts().subscribe((data: {}) => {
      this.ProductsList = data;
    })
  }

}
