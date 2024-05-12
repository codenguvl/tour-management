import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Tour {
  tour_id: number;
  tour_name: string;
  location_id: number;
  start_date: Date;
  end_date: Date;
  price: number;
  description: string;
}

@Component({
  selector: 'ngx-add-tour',
  templateUrl: './edit-tours.component.html',
})
export class EditToursComponent {
  tour: Tour = {
    tour_id: 1,
    tour_name: 'Tour A',
    location_id: 1,
    start_date: new Date('2024-05-01'),
    end_date: new Date('2024-05-05'),
    price: 100,
    description: 'Description of Tour A',
  };
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/pages/tours']);
  }

  saveChanges(formData: any) {
    console.log('Thông tin tour sau khi chỉnh sửa:', formData);
    this.router.navigate(['/tours']);
  }
}
