import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

interface Order {
  order_id: number;
  tour_id: number;
  customer_name: string;
  customer_email: string;
  booking_date: Date;
  total_price: number;
}

interface Tour {
  tour_id: number;
  tour_name: string;
}

@Component({
  selector: 'ngx-orders',
  templateUrl: './add-orders.component.html',
})
export class AddOrdersComponent {
  @Output() addOrder: EventEmitter<any> = new EventEmitter();
  orderData: any = {
    tour_id: null,
    customer_name: '',
    customer_email: '',
    booking_date: null,
    total_price: null,
  };

  tours: Tour[] = [
    { tour_id: 1, tour_name: 'Tour A' },
    { tour_id: 2, tour_name: 'Tour B' },
    { tour_id: 3, tour_name: 'Tour C' },
  ];

  constructor(private router: Router) {}
  onSubmit() {
    if (this.isValidOrderData()) {
      this.addOrder.emit(this.orderData);
    } else {
      alert('Vui lòng điền đầy đủ thông tin.');
    }
  }

  isValidOrderData(): boolean {
    return (
      this.orderData.tour_id &&
      this.orderData.customer_name.trim() !== '' &&
      this.orderData.customer_email.trim() !== '' &&
      this.orderData.booking_date &&
      this.orderData.total_price
    );
  }
}
