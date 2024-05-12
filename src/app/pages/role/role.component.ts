import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-roles',
  templateUrl: './role.component.html',
})
export class RoleComponent {
  currentPage: number = 1;
  lastPage: number = 5;
  roles = [
    { id: '1', name: 'Role 1' },
    { id: '2', name: 'Role 2' },
    { id: '3', name: 'Role 3' },
    { id: '4', name: 'Role 4' },
    { id: '5', name: 'Role 5' },
    { id: '6', name: 'Role 6' },
    { id: '7', name: 'Role 7' },
    { id: '8', name: 'Role 8' },
    { id: '9', name: 'Role 9' },
    { id: '10', name: 'Role 10' },
  ];

  constructor(private router: Router) {}

  navigateToAddRole() {
    this.router.navigate(['/pages/add-role']);
  }

  navigateToEditRole(id: string) {
    this.router.navigate(['/pages/edit-role', id]);
  }

  confirmDelete(role: any) {
    // Xác nhận xóa vai trò
  }
}
