import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FacilityModalMode } from '../facility.constants';

@Component({
  selector: 'app-facility-modal',
  templateUrl: './facility-modal.component.html',
  styleUrls: ['./facility-modal.component.less'],
})
export class FacilityModalComponent implements OnInit {
  constructor() {}

  @Input()
  public mode: FacilityModalMode;

  @Output()
  public submit: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public close: EventEmitter<any> = new EventEmitter<any>();

  public modes: typeof FacilityModalMode;
  public modalWindow: FormGroup;

  ngOnInit(): void {
    this.modalWindow = new FormGroup({
      model: new FormControl(
        { value: '', disabled: false },
        Validators.required
      ),
      manufacturer: new FormControl(
        { value: '', disabled: false },
        Validators.required
      ),
      serial: new FormControl(
        { value: '', disabled: false },
        Validators.required
      ),
      registrationKey: new FormControl(
        { value: '', disabled: false },
        Validators.required
      ),
    });
    this.modes = FacilityModalMode;
  }

  onSubmit() {
    this.submit.emit(this.modalWindow.value);
  }

  onClose() {
    this.close.emit();
  }
}
