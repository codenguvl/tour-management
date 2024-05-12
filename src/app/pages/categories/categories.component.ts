import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

@Component({
  selector: 'ngx-categories',
  templateUrl: './categories.component.html',
})
export class CategoriesComponent {
  currentPage: number = 1;
  lastPage: number = 5;
  rows = [
    { id: '1', name: 'Danh mục 1' },
    { id: '2', name: 'Danh mục 2' },
    { id: '3', name: 'Danh mục 3' },
    { id: '4', name: 'Danh mục 4' },
    { id: '5', name: 'Danh mục 5' },
    { id: '6', name: 'Danh mục 6' },
    { id: '7', name: 'Danh mục 7' },
    { id: '8', name: 'Danh mục 8' },
    { id: '9', name: 'Danh mục 9' },
    { id: '10', name: 'Danh mục 10' },
  ];
  constructor(private router: Router) {}
  navigateToAddCategories() {
    this.router.navigate(['/pages/add-categories']);
  }
  navigateToEditCategories(id: string) {
    this.router.navigate(['/pages/edit-categories', id]);
  }
  confirmDelete(row: any) {}
}
