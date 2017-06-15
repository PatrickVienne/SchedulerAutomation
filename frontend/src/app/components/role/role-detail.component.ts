import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { RoleService } from '../../services/role.service';
import { Role } from '../../models/role';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.css']
})
export class RoleDetailComponent implements OnInit {

  role: Role;

  constructor(private roleService: RoleService, private router: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    console.log("ID:", +this.router.params['id']);
    console.log("ID-snapshot:", +this.router.snapshot.params['id']);
    this.router.params
      .switchMap((params: Params) => this.roleService.get(+params['id'])) // (+) converts string 'id' to a number
      .subscribe(role => {
        this.role = role;
        console.log(this.role);
      }
      );
  }

  save(): void {
    if (this.role.id != 0) {
      this.roleService.update(this.role).then(() => this.location.back());
    } else {
      this.roleService.create(this.role).then(() => this.location.back());
    }

  }

  cancel(): void {
    this.location.back();
  }

}
