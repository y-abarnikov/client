import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitiesListComponent } from './facilities-list.component';
import { FacilityComponent } from './facility.component';
import { FacilityModalComponent } from './facility-modal/facility-modal.component';
import { EnergyCharacteristicChartComponent } from './energy-characteristic-chart.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FacilitiesRoutingModule,
    ChartsModule,
  ],
  declarations: [
    FacilityModalComponent,
    FacilitiesListComponent,
    FacilityComponent,
    EnergyCharacteristicChartComponent,
  ],
})
export class FacilitiesModule {}
