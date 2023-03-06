import { Component } from '@angular/core';
import { MegaMenuItem, MenuItem} from 'primeng/api';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})

export class NavmenuComponent {

    items: MegaMenuItem[] = [];

    ngOnInit() {
        this.items = [
            {label: 'Home', icon: 'pi pi-fw pi-home',  routerLink:"/",},
            {label: 'Offices', icon: 'pi pi-fw pi-building',  routerLink:"/offices",},
            {label: 'Employees', icon: 'pi pi-fw pi-user', routerLink:"/employees",},
            {label: 'Customers', icon: 'pi pi-fw pi-users', routerLink:"/customers",},
            {label: 'Orders', icon: 'pi pi-fw pi-shopping-cart', routerLink:"/orders",},
            {label: 'Order Details', icon: 'pi pi-fw pi-th-large', routerLink:"/orderdetails",},
            {label: 'Payments', icon: 'pi pi-fw pi-wallet', routerLink:"/payments",},
            {label: 'Product Lines', icon: 'pi pi-fw pi-bars', routerLink:"/productlines",},
            {label: 'Products', icon: 'pi pi-fw pi-truck', routerLink:"/products",},

        ]
    }
}