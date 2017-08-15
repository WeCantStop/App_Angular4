import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from '../pages/home/home.component';
import {ReserveComponent} from '../pages/reserve/reserve.component';
import {ActivityComponent} from '../pages/activity/activity.component';
import {FindComponent} from '../pages/find/find.component';
import {MyComponent} from './../pages/my/my.component';


const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'reserve', component: ReserveComponent},
    {path: 'activity', component: ActivityComponent},
    {path: 'find', component: FindComponent},
    {path: 'my', component: MyComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule {
}
