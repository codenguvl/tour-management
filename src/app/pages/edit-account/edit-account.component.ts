import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Account {
  email: string;
  username: string;
  password: string;
  role: string;
}

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
})
export class EditAccountComponent {
  constructor(private router: Router) {}

  editedAccount: Account = {
    email: 'example@example.com',
    username: 'example_user',
    password: 'example_password',
    role: 'Admin',
  };

  roles: any[] = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'User' },
  ];

  editAccount() {}
}
