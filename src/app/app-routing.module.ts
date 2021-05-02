import { ManagerComponent } from './pages/manager/manager.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'reservation', pathMatch: 'full' },
      {
        path: 'reservation',
        component: ReservationComponent,
        data: {
          title: '預約系統'
        }
      },
      {
        path: 'manager',
        component: ManagerComponent,
        data: {
          title: '查詢及取消會議室'
        }
      }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
