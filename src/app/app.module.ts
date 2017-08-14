import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouterModule } from './router';

/** 视图组件 **/
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ReserveComponent } from './pages/reserve/reserve.component';
import { NavTabComponent } from './common/nav-tab/nav-tab.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { FindComponent } from './pages/find/find.component';
import { MyComponent } from './pages/my/my.component';
import { HeaderComponent } from './common/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavTabComponent,
    HomeComponent,
    ReserveComponent,
    ActivityComponent,
    FindComponent,
    MyComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
