import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'windows';
   constructor(translate: TranslateService){
    translate.setDefaultLang('zh_CN');
    translate.use('zh_CN');
  }
}
