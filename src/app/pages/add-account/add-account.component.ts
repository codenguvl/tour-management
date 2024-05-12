import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Account {
  email: string;
  username: string;
  password: string;
  role: string;
}
@Component({
  selector: 'ngx-customers',
  templateUrl: './add-account.component.html',
})
export class AddAccountComponent {
  constructor(private router: Router) {}
  newAccount: Account = {
    email: '',
    username: '',
    password: '',
    role: '',
  };

  roles: any[] = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'User' },
    // Các vai trò khác
  ];
  addAccount() {}
}
