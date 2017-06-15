import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ShiftService } from '../../services/shift.service';

import { Shift } from '../../models/shift';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css']
})
export class ShiftsComponent implements OnInit {

  shifts: Shift[];

  constructor(private shiftService: ShiftService, 
    private router: Router) { }

  ngOnInit() {
    this.getShifts();
  }

  getShifts(): void {
    this.shiftService.getShifts()
      .then(shiftsFromPromise => this.shifts = shiftsFromPromise);
  }
  
  edit(shift: Shift): void {
    this.router.navigate(["/shifts_detail", shift.id]);
  }

  create(shift: Shift): void {
    this.router.navigate(["/shifts_detail", 0]);
  }

  delete(shift: Shift): void {
    this.shiftService.delete(shift.id).then(() => {
      this.shifts = this.shifts.filter(e => e !== shift);
    })
  }
}
