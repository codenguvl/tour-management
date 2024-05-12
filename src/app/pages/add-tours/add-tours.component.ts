import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-tour',
  templateUrl: './add-tours.component.html',
})
export class AddToursComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/pages/tours']);
  }

  addTour(formData: any) {
    console.log('Thông tin tour mới:', formData);
    this.router.navigate(['/pages/tours']);
  }
}
