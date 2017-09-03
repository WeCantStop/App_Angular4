import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { ActivityComponent } from '../pages/activity/activity.component';
import { FindComponent } from '../pages/find/find.component';
import { MyComponent } from '../pages/my/my.component';
import { UserInfoComponent } from '../pages/user-info/user-info.component';


/** 使用异步加载路由的方式可以提高加载速度，提高第一次的加载速度 **/
const routes: Routes = [
    { path: 'user/userInfo/:id', component: UserInfoComponent },
    { path: 'home', component: HomeComponent },
    { path: 'reserve', loadChildren: '../pages/reserve/reserve.module#ReserveModule' },
    { path: 'activity', component: ActivityComponent },
    { path: 'find', component: FindComponent },
    { path: 'my', component: MyComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule {
}
