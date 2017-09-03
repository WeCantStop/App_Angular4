import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReserveComponent } from './reserve.component';

const routes: Routes = [
  {
    path: '',
    component: ReserveComponent
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule],
  providers:[]
})

export class ReserveRoutingModule {}
