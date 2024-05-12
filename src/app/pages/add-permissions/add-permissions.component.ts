import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-permissions',
  templateUrl: './add-permissions.component.html',
})
export class AddPermissionsComponent {
  constructor(private router: Router) {}

  savePermissions() {
    // Logic to save permissions
  }
}
