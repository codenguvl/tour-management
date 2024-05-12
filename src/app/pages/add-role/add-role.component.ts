import { Component } from '@angular/core';

interface Permission {
  id: number;
  name: string;
}
@Component({
  selector: 'ngx-add-role',
  templateUrl: './add-role.component.html',
})
export class AddRoleComponent {
  permissions: Permission[] = [
    { id: 1, name: 'Quyền 1' },
    { id: 2, name: 'Quyền 2' },
  ];
  selectedPermissions: { [key: number]: boolean } = {};
}
