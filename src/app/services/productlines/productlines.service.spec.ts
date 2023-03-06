import { TestBed } from '@angular/core/testing';

import { ProductlinesService } from '../productlines/productlines.service';

describe('ProductlinesService', () => {
  let service: ProductlinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductlinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
