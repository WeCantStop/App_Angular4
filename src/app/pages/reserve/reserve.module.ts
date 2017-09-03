import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReserveRoutingModule } from './reserve.routing.module';
import { WeUiModule } from 'ngx-weui';

import { ReserveComponent } from './reserve.component';
import { ChildComponent } from '../../components/child/child.component';

@NgModule({
  imports: [
    CommonModule,
    ReserveRoutingModule,
    WeUiModule.forRoot()
  ],
  declarations: [ ReserveComponent, ChildComponent ]
})
export class ReserveModule { }
