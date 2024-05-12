import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Order {
  order_id: number;
  tour_id: number;
  customer_name: string;
  customer_email: string;
  booking_date: Date;
  total_price: number;
}

@Component({
  selector: 'ngx-orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent {
  constructor(private router: Router) {}
  orders: Order[] = [
    {
      order_id: 1,
      tour_id: 1,
      customer_name: 'John Doe',
      customer_email: 'john@example.com',
      booking_date: new Date('2024-05-01'),
      total_price: 200,
    },
    {
      order_id: 2,
      tour_id: 2,
      customer_name: 'Jane Smith',
      customer_email: 'jane@example.com',
      booking_date: new Date('2024-05-02'),
      total_price: 250,
    },
  ];
  currentPage: number = 1;
  lastPage: number = 5;
  navigateToAddLocation() {
    this.router.navigate(['/pages/add-orders']);
  }

  navigateToEditLocation(id: string) {
    this.router.navigate(['/pages/edit-orders', id]);
  }
}
