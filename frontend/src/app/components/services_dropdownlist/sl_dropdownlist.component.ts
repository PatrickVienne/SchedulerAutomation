import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServiceLocation } from '../../models/servicelocation';

@Component({
  selector: 'services-dropdownlist',
  templateUrl: './sl_dropdownlist.component.html',
  styleUrls: ['./sl_dropdownlist.component.css']
})
export class ServiceLocationDropdownlistComponent implements OnInit {
  @Input() dropdownitems: ServiceLocation[];
  @Input() activeid: number;
  @Output() select: EventEmitter<any> = new EventEmitter();
  selectedLocation: ServiceLocation;

  ngOnInit() {
    this.dropdownitems = this.dropdownitems;
    this.selectedLocation = this.dropdownitems.find(x => x.id == this.activeid);
  }

  selectEvent(evt) {
    console.log("current service location", this.selectedLocation);
    this.select.emit(this.selectedLocation.id);
  }

  constructor() { }

}

