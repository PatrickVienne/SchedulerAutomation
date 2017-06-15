import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { ShiftService } from '../../services/shift.service';
import { Shift } from '../../models/shift';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-shift-detail',
  templateUrl: './shift-detail.component.html',
  styleUrls: ['./shift-detail.component.css']
})
export class ShiftDetailComponent implements OnInit {

  shift: Shift;

  constructor(private shiftService: ShiftService,
    private router: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.router.params
      .switchMap((params: Params) => this.shiftService.get(+params['id'])) // (+) converts string 'id' to a number
      .subscribe(shift => {
        this.shift = shift;
      }
      );
  }

  save(): void {
    if (this.shift.id != 0) {
      this.shiftService.update(this.shift).then(() => this.location.back());
    } else {
      this.shiftService.create(this.shift).then(() => this.location.back());
    }

  }

  cancel(): void {
    this.location.back();
  }
}