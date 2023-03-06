import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductlinesService } from '../../../services/productlines/productlines.service';

import { ProductLine } from '../../../services/productlines/productline';

@Component({
  selector: 'app-productline',
  templateUrl: './productline.component.html',
  styleUrls: ['./productline.component.css']
})
export class ProductlineComponent implements OnInit{
  
  productLine: ProductLine = new ProductLine();
  ProductsList: any = [];
  productLineFromRoute: string = '';
  

  constructor(
    private route: ActivatedRoute,
    public productlinesService: ProductlinesService,
    ) { }

  ngOnInit() {    
    const routeParams = this.route.snapshot.paramMap;
    this.productLineFromRoute = routeParams.get('productLine') as string;    
    
    this.getProductLine(this.productLineFromRoute);
    this.getProducts(this.productLineFromRoute);
  }

  getProductLine(productLine: string) {
    return this.productlinesService.GetProductLine(productLine).subscribe((data: ProductLine) => {
      this.productLine = data;
    })
  }

  getProducts(productLine: string) {
    return this.productlinesService.GetProducts(productLine).subscribe((data: {}) => {
      this.ProductsList = data;
    })
  }

}
