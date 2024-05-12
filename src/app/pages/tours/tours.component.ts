import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-tours',
  /* styleUrls: ['./categories.component.scss'], */
  templateUrl: './tours.component.html',
})
export class ToursComponent {
  currentPage: number = 1;
  lastPage: number = 5;
  tours = [
    {
      tour_id: 1,
      tour_name: 'Tour A',
      location_id: 1,
      start_date: new Date('2024-05-01'),
      end_date: new Date('2024-05-05'),
      price: 100,
      description: 'Description of Tour A',
    },
    {
      tour_id: 2,
      tour_name: 'Tour B',
      location_id: 2,
      start_date: new Date('2024-05-06'),
      end_date: new Date('2024-05-10'),
      price: 120,
      description: 'Description of Tour B',
    },
    {
      tour_id: 3,
      tour_name: 'Tour C',
      location_id: 3,
      start_date: new Date('2024-05-11'),
      end_date: new Date('2024-05-15'),
      price: 150,
      description: 'Description of Tour C',
    },
    {
      tour_id: 4,
      tour_name: 'Tour D',
      location_id: 1,
      start_date: new Date('2024-05-16'),
      end_date: new Date('2024-05-20'),
      price: 110,
      description: 'Description of Tour D',
    },
    {
      tour_id: 5,
      tour_name: 'Tour E',
      location_id: 2,
      start_date: new Date('2024-05-21'),
      end_date: new Date('2024-05-25'),
      price: 130,
      description: 'Description of Tour E',
    },
  ];

  constructor(private router: Router) {}
  navigateToAddTour() {
    this.router.navigate(['/pages/add-tours']);
  }

  navigateToEditTour(tourId: number) {
    this.router.navigate(['/pages/edit-tours', tourId]);
  }
}
