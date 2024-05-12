import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

interface Customer {
  customer_id: number;
  customer_name: string;
  customer_sdt: string;
}

@Component({
  selector: 'ngx-customers',
  templateUrl: './add-customers.component.html',
})
export class AddCustomersComponent {
  @Output() addCustomer: EventEmitter<Customer> = new EventEmitter();

  newCustomer: Customer = {
    customer_id: null,
    customer_name: '',
    customer_sdt: '',
  };

  onSubmit() {
    this.addCustomer.emit(this.newCustomer);
    this.newCustomer = {
      customer_id: null,
      customer_name: '',
      customer_sdt: '',
    };
  }
}
