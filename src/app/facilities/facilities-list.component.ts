import { Component, OnInit } from '@angular/core';
import { FacilityModalMode } from './facility.constants';

@Component({
  templateUrl: 'facilities-list.component.html',
})
export class FacilitiesListComponent implements OnInit {
  constructor() {}

  public modalShow = false;
  public modalMode: FacilityModalMode = FacilityModalMode.CREATE;

  ngOnInit() {}

  public removeFacility() {
    alert('removed');
  }

  addFacility() {
    this.modalShow = true;
    this.modalMode = FacilityModalMode.CREATE;
  }

  editFacility() {
    this.modalShow = true;
    this.modalMode = FacilityModalMode.EDIT;
  }

  sendRequest(info: any) {
    alert(JSON.stringify(info));
  }

  closeModal() {
    this.modalShow = false;
  }
}
