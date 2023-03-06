import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { EmployeesService } from '../../../services/employees/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent  implements OnInit {
  
  EmployeesList: any = [];

  ngOnInit() {
    this.getEmployees();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public employeesService: EmployeesService
  ) {}

  getEmployees() {
    return this.employeesService.GetEmployees().subscribe((data: {}) => {
      this.EmployeesList = data;
    })
  }

}
