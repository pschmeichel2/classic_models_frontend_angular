import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductlinesService } from '../../../services/productlines/productlines.service';

@Component({
  selector: 'app-productlines',
  templateUrl: './productlines.component.html',
  styleUrls: ['./productlines.component.css']
})
export class ProductlinesComponent implements OnInit {
  
  ProductlinesList: any = [];

  ngOnInit() {
    this.getProductLines();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public productlinesService: ProductlinesService
  ) {}

  getProductLines() {
    return this.productlinesService.GetProductLines().subscribe((data: {}) => {
      this.ProductlinesList = data;
    })
  }

}
