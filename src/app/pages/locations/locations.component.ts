import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Location {
  location_id: number;
  location_name: string;
  category_id: number;
  image_url: string;
}

@Component({
  selector: 'ngx-locations',
  templateUrl: './locations.component.html',
})
export class LocationsComponent {
  locations = [
    {
      location_id: 1,
      location_name: 'Đà Nẵng',
      category_id: 1,
      image_url: 'assets/images/da-nang.jpg',
    },
    {
      location_id: 2,
      location_name: 'Huế',
      category_id: 1,
      image_url: 'assets/images/hue.jpg',
    },
    {
      location_id: 3,
      location_name: 'Đà Lạt',
      category_id: 2,
      image_url: 'assets/images/da-lat.webp',
    },
  ];

  constructor(private router: Router) {}

  currentPage: number = 1;
  lastPage: number = 5;

  navigateToAddLocation() {
    this.router.navigate(['/pages/add-locations']);
  }

  navigateToEditLocation(id: string) {
    this.router.navigate(['/pages/edit-locations', id]);
  }
}
