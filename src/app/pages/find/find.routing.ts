import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { FindComponent } from './find.component';

const routes: Routes = [
    {
        path: '',
        component: FindComponent
    }
    // {
    //     path: 'userDetail',
    //     component: UserDetailComponent
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class FindRoutingModule {
}
