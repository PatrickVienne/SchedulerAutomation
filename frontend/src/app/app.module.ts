import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeesComponent } from './components/employee/employees.component';

import { EmployeeService } from './services/employee.service';
import { ServiceLocationService } from './services/servicelocation.service';
import { RoleService } from './services/role.service';

import { EmployeeDetailComponent } from './components/employee/employee-detail.component';
import { ServicelocationsComponent } from './components/servicelocation/servicelocations.component';
import { ServicelocationDetailComponent } from './components/servicelocation/servicelocation-detail.component';
import { RoleDetailComponent } from './components/role/role-detail.component';
import { RolesComponent } from './components/role/roles.component';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { DropdownlistComponent } from './components/dropdownlist/dropdownlist.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    ServicelocationsComponent,
    ServicelocationDetailComponent,
    RoleDetailComponent,
    RolesComponent,
    DropdownlistComponent,
  ],
  imports: [
    DateValueAccessorModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [EmployeeService, ServiceLocationService, RoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

