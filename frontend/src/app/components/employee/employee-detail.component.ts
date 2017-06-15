import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import 'rxjs/add/operator/switchMap';
import { ServiceLocationService } from '../../services/servicelocation.service';
import { ServiceLocation } from '../../models/servicelocation';
import { ServiceLocationDropdownlistComponent } from '../services_dropdownlist/sl_dropdownlist.component';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee;
  exists: boolean;
  servicelocations: ServiceLocation[];

  constructor(private servicelocationService: ServiceLocationService, private employeeService: EmployeeService, private router: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    console.log("ID:", +this.router.params['id']);
    console.log("ID-snapshot:", +this.router.snapshot.params['id']);
    this.servicelocationService.getServiceLocations().then(servicelocationFromPromise => this.servicelocations = servicelocationFromPromise);
    /*
    [
      new DropdownItem(12, 'ww'),
      new DropdownItem(1, 'bb'),
      new DropdownItem(2, 'cc'),
      new DropdownItem(3, 'dd')
    ];
    */
    this.router.params
      .switchMap((params: Params) => this.employeeService.get(+params['id'])) // (+) converts string 'id' to a number
      .subscribe(employee => {
        this.employee = employee;
        this.employee['employedsince'] = new Date(employee['employedsince']);
        console.log(employee['employedsince']);
      }
      );
  }

  save(): void {
    if (this.employee.id != 0) {
      this.employeeService.update(this.employee).then(() => this.location.back());
    } else {
      this.employeeService.create(this.employee).then(() => this.location.back());
    }

  }

  selectItem(id:number):void{
    console.log("Selected Item", id);
    this.employee.servicelocationid = id;
  }

  cancel(): void {
    this.location.back();
  }

}
