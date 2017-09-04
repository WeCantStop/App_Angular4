import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeUiModule} from 'ngx-weui';

import {Http} from '@angular/http';

import {TranslateModule, TranslateLoader} from 'ng2-translate/ng2-translate';
import {createTranslateLoader} from '../../translate/translateLoader';

import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home.routing';
import {HeaderComponent} from '../../common/header/header.component';

import {HighLightDirective} from '../../attribute-directives/high-light.directive';

import {ReserveModule} from '../reserve/reserve.module';


@NgModule({
    imports: [
        CommonModule,
        WeUiModule.forRoot(),
        HomeRoutingModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
        ReserveModule
    ],
    declarations: [HomeComponent, HeaderComponent, HighLightDirective]
})
export class HomeModule {
}
