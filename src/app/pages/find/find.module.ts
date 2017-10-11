import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Http} from '@angular/http';

import {TranslateModule, TranslateLoader} from 'ng2-translate/ng2-translate';
import {createTranslateLoader} from '../../translate/translateLoader';

import {FindComponent} from './find.component';
import {FindRoutingModule} from './find.routing';



@NgModule({
    imports: [
        CommonModule,
        FindRoutingModule,
        FormsModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
    ],
    declarations: [FindComponent]
})
export class FindModule {
}
