import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Customer {
  customer_id: number;
  customer_name: string;
  customer_sdt: string;
}

@Component({
  selector: 'ngx-customers',
  /* styleUrls: ['./categories.component.scss'], */
  templateUrl: './customers.component.html',
})
export class CustomersComponent {
  currentPage: number = 1;
  lastPage: number = 5;
  customers: Customer[] = [
    { customer_id: 1, customer_name: 'John Doe', customer_sdt: '123456789' },
    { customer_id: 2, customer_name: 'Jane Smith', customer_sdt: '987654321' },
    {
      customer_id: 3,
      customer_name: 'Alice Johnson',
      customer_sdt: '456789123',
    },
  ];
  constructor(private router: Router) {}
  navigateToAddCumtomers() {
    this.router.navigate(['/pages/add-customers']);
  }
  navigateToEditCumtomers(id: string) {
    this.router.navigate(['/pages/edit-customers', id]);
  }
}
