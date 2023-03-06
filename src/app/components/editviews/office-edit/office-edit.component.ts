import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';

import { OfficesService } from '../../../services/offices/offices.service';
import { Office } from '../../../services/offices/office';
import { OfficeError } from '../../../services/offices/officeerror';

@Component({
  selector: 'app-office-edit',
  templateUrl: './office-edit.component.html',
  styleUrls: ['./office-edit.component.css']
})
export class OfficeEditComponent implements OnInit{

  officeCodeFromRoute: string = '';
  newOfficeCode: string = '';
  office: Office = new Office();
  officeError: OfficeError = new OfficeError();

  constructor(
    private route: ActivatedRoute,
    public officesService: OfficesService,
    private _router: Router
    ) { }

  ngOnInit() {    
    const routeParams = this.route.snapshot.paramMap;
    this.officeCodeFromRoute = routeParams.get('officeCode') as string;
    if( this.officeCodeFromRoute !== null ) {
      this.getOffice(this.officeCodeFromRoute);
    }  
  }

  getOffice(officeCode: string) {
    return this.officesService.GetOffice(officeCode).subscribe((data: Office) => {
      this.office = data;
    })
  }

  handleClickCancel(event: Event) {
    if (this.officeCodeFromRoute === null) {
      this._router.navigate(['/offices']);
    } else {
      this._router.navigate(['/offices', this.officeCodeFromRoute]);
    }
  }

  handleClickSave(event: Event) {  
    if (this.officeCodeFromRoute === null) {
      this.saveNewAndClose();
    } else {
      this.saveEditAndClose();
    }
  }

  saveNewAndClose() {
    this.officeError = new OfficeError();
    this.officesService.PostOffice(this.office).subscribe({
      next: (data: Office) => {
        this.office = data;
        this._router.navigate(['/offices', this.office.officeCode]);  
      },
      error: (error: OfficeError) => {
        console.log('saveNewAndClose', error);
        this.officeError = error;
      }
    });
  }

  saveEditAndClose() {
    this.officeError = new OfficeError();
    this.officesService.PutOffice(this.office).subscribe({
      next: (data: Office) => {
        this.office = data;
        this._router.navigate(['/offices', this.office.officeCode]);  
      },
      error: (error: OfficeError) => {
        console.log('saveEditAndClose', error);
        this.officeError = error;
      }
    });
  }

  getTitle() {
    if (this.officeCodeFromRoute === null) {
        return 'New Office';            
    } else {
        return `Edit Office ${this.officeCodeFromRoute} (${this.office.city})`;
    }
  }

}
