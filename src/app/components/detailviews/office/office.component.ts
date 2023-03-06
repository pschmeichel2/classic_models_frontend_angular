import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';

import { OfficesService } from '../../../services/offices/offices.service';
import { Office } from '../../../services/offices/office';
import { OfficeError } from '../../../services/offices/officeerror';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class OfficeComponent implements OnInit{
  
  office: Office = new Office();
  EmployeesList: any = [];
  officeCodeFromRoute: string = '';
  officeError: OfficeError = new OfficeError();
  
  constructor(
    private route: ActivatedRoute,
    public officesService: OfficesService,
    private _router: Router,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService
    ) { }

  ngOnInit() {    
    const routeParams = this.route.snapshot.paramMap;
    this.officeCodeFromRoute = routeParams.get('officeCode') as string;
    
    this.getOffice(this.officeCodeFromRoute);
    this.getEmployees(this.officeCodeFromRoute);
  }

  getOffice(officeCode: string) {
    return this.officesService.GetOffice(officeCode).subscribe((data: Office) => {
      this.office = data;
    })
  }

  getEmployees(officeCode: string) {
    return this.officesService.GetEmployees(officeCode).subscribe((data: {}) => {
      this.EmployeesList = data;
    })
  }

  handleClickAdd(event: Event) {
    this._router.navigate(['/offices/new']);
  }

  handleClickEdit(event: Event) {
    this._router.navigate(['/offices', this.officeCodeFromRoute, 'edit']);
  }

  handleClickDelete(event: Event) {    
    this.confirmationService.confirm({      
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({severity:'info', summary:'Confirmed', detail:'You have accepted'});

        this.officesService.DeleteOffice(this.office).subscribe({
          next: (data: Office) => {
            this.office = data;
            this._router.navigate(['/offices', this.office.officeCode]);  
          },
          error: (error: OfficeError) => {
            console.log('handleClickDelete', error);
            this.officeError = error;
          }
        });
      }        
    });
  }

}
