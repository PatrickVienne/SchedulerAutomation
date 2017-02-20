import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './components/employee/employees.component';
import { EmployeeDetailComponent } from './components/employee/employee-detail.component';
import { ServicelocationsComponent } from './components/servicelocation/servicelocations.component';
import { ServicelocationDetailComponent } from './components/servicelocation/servicelocation-detail.component';
import { RolesComponent } from './components/role/roles.component';


const routes: Routes = [
      {
        path: 'employees',
        component: EmployeesComponent
      },
      {
        path: 'employee_detail/:id',
        component: EmployeeDetailComponent
      },
      {
        path: 'servicelocations',
        component: ServicelocationsComponent
      },
      {
        path: 'servicelocation_detail/:id',
        component: ServicelocationDetailComponent
      },
      {
        path: 'roles',
        component: RolesComponent
      }

      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

