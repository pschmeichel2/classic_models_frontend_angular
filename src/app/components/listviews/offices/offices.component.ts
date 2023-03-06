import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { OfficesService } from '../../../services/offices/offices.service';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.css']
})
export class OfficesComponent  implements OnInit {
  
  OfficesList: any = [];

  ngOnInit() {
    this.getOffices();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public officesService: OfficesService
  ) {}

  getOffices() {
    return this.officesService.GetOffices().subscribe((data: {}) => {
      this.OfficesList = data;
    })
  }

}
