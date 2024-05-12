import { Component, OnInit } from '@angular/core';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

@Component({
  selector: 'ngx-categories',
  templateUrl: './add-categories.component.html',
})
export class AddCategoriesComponent {}
