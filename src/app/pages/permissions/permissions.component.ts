import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

@Component({
  selector: 'ngx-permissions',
  templateUrl: './permissions.component.html',
})
export class PermissionsComponent {
  currentPage: number = 1;
  lastPage: number = 5;
  rows = [
    { id: '1', name: 'Quyền 1', slug: 'quyen-1' },
    { id: '2', name: 'Quyền 2', slug: 'quyen-2' },
    { id: '3', name: 'Quyền 3', slug: 'quyen-3' },
    { id: '4', name: 'Quyền 4', slug: 'quyen-4' },
    { id: '5', name: 'Quyền 5', slug: 'quyen-5' },
    { id: '6', name: 'Quyền 6', slug: 'quyen-6' },
    { id: '7', name: 'Quyền 7', slug: 'quyen-7' },
    { id: '8', name: 'Quyền 8', slug: 'quyen-8' },
    { id: '9', name: 'Quyền 9', slug: 'quyen-9' },
    { id: '10', name: 'Quyền 10', slug: 'quyen-10' },
  ];
  constructor(private router: Router) {}
  navigateToAddPermissions() {
    this.router.navigate(['/pages/add-permissions']);
  }
  navigateToEditPermissions(id: string) {
    this.router.navigate(['/pages/edit-permissions', id]);
  }
  confirmDelete(row: any) {}
}
