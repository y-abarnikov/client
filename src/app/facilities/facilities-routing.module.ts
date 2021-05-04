import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacilitiesListComponent } from './facilities-list.component';
import { FacilityComponent } from './facility.component';

const routes: Routes = [
  {
    path: '',
    component: FacilitiesListComponent,
  },
  { path: ':facilityId', component: FacilityComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacilitiesRoutingModule {}
