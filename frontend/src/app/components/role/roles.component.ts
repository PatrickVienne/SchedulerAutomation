import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RoleService } from '../../services/role.service';

import{ Role } from '../../models/role';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})

export class RolesComponent implements OnInit {

  roles: Role[];

  constructor(private roleService: RoleService,
    private router: Router) { }

  ngOnInit() {
    this.getEmployees();
  }


  getEmployees(): void {
    this.roleService.getRoles()
      .then(rolesFromPromise => this.roles = rolesFromPromise);
  }

}
