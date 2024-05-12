import { Component } from '@angular/core';

interface Permission {
  id: number;
  name: string;
}

@Component({
  selector: 'ngx-edit-role',
  templateUrl: './edit-role.component.html',
})
export class EditRoleComponent {
  editedRole = {
    name: 'Role name',
    description: 'Role description',
  };
  permissions: Permission[] = [
    { id: 1, name: 'Quyền 1' },
    { id: 2, name: 'Quyền 2' },
  ];
  selectedPermissions: { [key: number]: boolean } = {};

  constructor() {}
}
