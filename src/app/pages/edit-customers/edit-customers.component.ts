import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Customer {
  customer_id: number;
  customer_name: string;
  customer_sdt: string;
}

@Component({
  selector: 'ngx-customers',
  /* styleUrls: ['./categories.component.scss'], */
  templateUrl: './edit-customers.component.html',
})
export class EditCustomersComponent {
  sampleCustomerData: Customer = {
    customer_id: 1,
    customer_name: 'John Doe',
    customer_sdt: '0123456789',
  };

  onSubmit() {}
}
