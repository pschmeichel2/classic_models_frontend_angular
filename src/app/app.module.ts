import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe, CurrencyPipe, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MatSidenavModule, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MegaMenuModule} from 'primeng/megamenu';
import { NavmenuComponent } from './components/sitenav/navmenu/navmenu.component';
import { MenuItem, PrimeIcons} from 'primeng/api';
import { CardModule} from 'primeng/card';
import { TableModule} from 'primeng/table';
import { ButtonModule} from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AvatarModule} from 'primeng/avatar';
import { AvatarGroupModule} from 'primeng/avatargroup';
import { PanelModule} from 'primeng/panel';
import { InputMaskModule} from 'primeng/inputmask';

import { AppComponent } from './app.component';

import { TopBarComponent } from './components/sitenav/top-bar/top-bar.component';
import { HomeComponent } from './components/sitenav/home/home.component';

import { OfficesComponent } from './components/listviews/offices/offices.component';
import { EmployeesComponent } from './components/listviews/employees/employees.component';
import { CustomersComponent } from './components/listviews/customers/customers.component';
import { OrdersComponent } from './components/listviews/orders/orders.component';
import { PaymentsComponent } from './components/listviews/payments/payments.component';
import { ProductsComponent } from './components/listviews/products/products.component';
import { OrderdetailsComponent } from './components/listviews/orderdetails/orderdetails.component';
import { ProductlinesComponent } from './components/listviews/productlines/productlines.component';

import { CustomerComponent } from './components/detailviews/customer/customer.component';
import { OfficeComponent } from './components/detailviews/office/office.component';
import { EmployeeComponent } from './components/detailviews/employee/employee.component';
import { OrderdetailComponent } from './components/detailviews/orderdetail/orderdetail.component';
import { OrderComponent } from './components/detailviews/order/order.component';
import { PaymentComponent } from './components/detailviews/payment/payment.component';
import { ProductlineComponent } from './components/detailviews/productline/productline.component';
import { ProductComponent } from './components/detailviews/product/product.component';

import { OfficesService } from './services/offices/offices.service';

import { CustomerEditComponent } from './components/editviews/customer-edit/customer-edit.component';
import { OfficeEditComponent } from './components/editviews/office-edit/office-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,    
    MatSidenavModule,
    MatButtonModule,  
    MatIconModule,  
    MatFormFieldModule,
    MatInputModule,    
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MegaMenuModule,
    CardModule,
    AvatarModule,
    PanelModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    FontAwesomeModule,
    InputMaskModule,
    
    RouterModule.forRoot([
      { path: '', component: HomeComponent, title: 'Classic Models - Home' },      
      { path: 'offices', component: OfficesComponent, title: 'Classic Models - Offices' },      
      { path: 'employees', component: EmployeesComponent, title: 'Classic Models - Employees' },      
      { path: 'customers', component: CustomersComponent, title: 'Classic Models - Offices' },      
      { path: 'orders', component: OrdersComponent, title: 'Classic Models - Orders' },      
      { path: 'orderdetails', component: OrderdetailsComponent, title: 'Classic Models - Order Details' },      
      { path: 'payments', component: PaymentsComponent, title: 'Classic Models - Payments' },      
      { path: 'productlines', component: ProductlinesComponent, title: 'Classic Models - Product Lines' },      
      { path: 'products', component: ProductsComponent, title: 'Classic Models - Products' },      

      { path: 'offices/new', component: OfficeEditComponent, title: 'Classic Models - Office - new' },      
      { path: 'offices/:officeCode/edit', component: OfficeEditComponent, title: 'Classic Models - Office - edit' },      
      { path: 'offices/:officeCode', component: OfficeComponent, title: 'Classic Models - Office' },      

      { path: 'employees/:employeeNumber', component: EmployeeComponent, title: 'Classic Models - Employee' },      
      { path: 'customers/:customerNumber', component: CustomerComponent, title: 'Classic Models - Customer' },      
      { path: 'orders/:orderNumber', component: OrderComponent, title: 'Classic Models - Order' },      
      { path: 'orderDetails/:orderNumber/:productCode', component: OrderdetailComponent, title: 'Classic Models - Order Detail' },      
      { path: 'payments/:customerNumber/:checkNumber', component: PaymentComponent, title: 'Classic Models - Payment' },      
      { path: 'productlines/:productLine', component: ProductlineComponent, title: 'Classic Models - Product Line' },      
      { path: 'products/:productCode', component: ProductComponent, title: 'Classic Models - Product' },  
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    NavmenuComponent,
    HomeComponent,    
    OfficesComponent,
    EmployeesComponent,
    CustomersComponent,
    OrdersComponent,
    PaymentsComponent,
    ProductsComponent,
    OrderdetailsComponent,
    ProductlinesComponent,
    CustomerComponent,
    OfficeComponent,
    EmployeeComponent,
    OrderdetailComponent,
    OrderComponent,
    PaymentComponent,
    ProductlineComponent,
    ProductComponent,    
    CustomerEditComponent,
    OfficeEditComponent,   

  ],
  bootstrap: [
    AppComponent
  ],
  providers: [OfficesService],
})
export class AppModule { }


