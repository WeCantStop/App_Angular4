import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRouterModule} from './router';

import {HttpModule, Http} from '@angular/http';

import {TranslateModule, TranslateLoader} from 'ng2-translate/ng2-translate';
import {createTranslateLoader} from './translate/translateLoader';

/** 视图组件 **/
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {ReserveComponent} from './pages/reserve/reserve.component';
import {NavTabComponent} from './common/nav-tab/nav-tab.component';
import {ActivityComponent} from './pages/activity/activity.component';
import {FindComponent} from './pages/find/find.component';
import {MyComponent} from './pages/my/my.component';
import {HeaderComponent} from './common/header/header.component';
import {HighLightDirective} from './attribute-directives/high-light.directive';

@NgModule({
    declarations: [
        AppComponent,
        NavTabComponent,
        HomeComponent,
        ReserveComponent,
        ActivityComponent,
        FindComponent,
        MyComponent,
        HeaderComponent,
        HighLightDirective
    ],
    imports: [
        BrowserModule,
        AppRouterModule,
        HttpModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
