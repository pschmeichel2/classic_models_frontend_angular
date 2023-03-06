import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../../../services/products/products.service';

import { Product } from '../../../services/products/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  
  product: Product = new Product();
  OrderDetailsList: any = [];
  productCodeFromRoute: string = '';
  

  constructor(
    private route: ActivatedRoute,
    public productsService: ProductsService,
    ) { }

  ngOnInit() {    
    const routeParams = this.route.snapshot.paramMap;
    this.productCodeFromRoute = routeParams.get('productCode') as string;
        
    this.getProduct(this.productCodeFromRoute);
    this.getOrderDetails(this.productCodeFromRoute);
  }

  getProduct(productCode: string) {
    return this.productsService.GetProduct(productCode).subscribe((data: Product) => {
      this.product = data;
    })
  }

  getOrderDetails(productCode: string) {
    return this.productsService.GetOrderDetails(productCode).subscribe((data: {}) => {
      this.OrderDetailsList = data;
    })
  }

}
