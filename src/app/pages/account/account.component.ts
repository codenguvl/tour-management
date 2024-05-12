import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Account {
  account_id: number;
  email: string;
  username: string;
  password: string;
  role: string;
}

@Component({
  selector: 'ngx-customers',
  templateUrl: './account.component.html',
})
export class AccountComponent {
  currentPage: number = 1;
  lastPage: number = 5;
  accounts: Account[] = [
    {
      account_id: 1,
      username: 'John Doe',
      email: '123',
      password: '123456789',
      role: 'admin',
    },
    {
      account_id: 1,
      email: '123',
      username: 'John Doe',
      password: '123456789',
      role: 'admin',
    },
    {
      account_id: 1,
      email: '123',
      username: 'John Doe',
      password: '123456789',
      role: 'admin',
    },
  ];
  constructor(private router: Router) {}
  navigateToAddAccount() {
    this.router.navigate(['/pages/add-accounts']);
  }
  navigateToEditAccount(id: string) {
    this.router.navigate(['/pages/edit-accounts', id]);
  }
}
