import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { FacilitiesListComponent, FacilityComponent } from './facilities';

const accountModule = () =>
  import('./account/account.module').then((x) => x.AccountModule);
const facilitiesModule = () =>
  import('./facilities/facilities.module').then((x) => x.FacilitiesModule);
// const usersModule = () =>
//   import('./users/users.module').then((x) => x.UsersModule);

const routes: Routes = [
  { path: 'account', loadChildren: accountModule },
  {
    path: 'facilities',
    canActivate: [AuthGuard],
    loadChildren: facilitiesModule,
  },
  // {
  //   path: 'facilities/:facilityId',
  //   component: FacilityComponent,
  //   canActivate: [AuthGuard],
  // },
  // otherwise redirect to home
  { path: '**', redirectTo: '/facilities' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
