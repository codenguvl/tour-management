import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Permission {
  name: string;
  description: string;
  slug: string;
}

@Component({
  selector: 'ngx-edit-permissions',
  templateUrl: './edit-permissions.component.html',
})
export class EditPermissionsComponent {
  editedPermission: Permission = {
    name: 'Quyền mẫu',
    description: 'Mô tả của quyền mẫu',
    slug: 'slug-mau',
  };

  constructor(private router: Router) {}

  saveEditedPermission() {
    // Logic to save edited permission
  }
}
