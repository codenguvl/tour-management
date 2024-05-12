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
  templateUrl: './add-locations.component.html',
})
export class AddLocationsComponent {
  imageUrl: string | undefined;
  constructor(private router: Router) {}
  previewImage(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
