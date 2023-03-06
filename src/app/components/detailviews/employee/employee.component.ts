import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmployeesService } from '../../../services/employees/employees.service';

import { Employee } from '../../../services/employees/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  
  employee: Employee = new Employee();
  CustomersList: any = [];
  employeeNumberFromRoute: string = '';

  constructor(
    private route: ActivatedRoute,
    public employeesService: EmployeesService,
    ) { }

  ngOnInit() {    
    const routeParams = this.route.snapshot.paramMap;
    this.employeeNumberFromRoute = routeParams.get('employeeNumber') as string;
    
    this.getEmployee(this.employeeNumberFromRoute);
    this.getCustomers(this.employeeNumberFromRoute);
  }

  getEmployee(employeeNumber: string) {
    return this.employeesService.GetEmployee(employeeNumber).subscribe((data: Employee) => {
      this.employee = data;
    })
  }

  getCustomers(employeeNumber: string) {
    return this.employeesService.GetCustomers(employeeNumber).subscribe((data: {}) => {
      this.CustomersList = data;
    })
  }

}
