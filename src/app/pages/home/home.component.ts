import {Component, OnInit} from '@angular/core';
import {TranslateService} from 'ng2-translate';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public translate: TranslateService) {
  }

  persons = ['one', 'two', 'three', 'four'];

  ngOnInit() {
  }

  btnClick() {
    this.translate.currentLang === 'zh_CN' ? this.translate.use('en_US') : this.translate.use('zh_CN');
  }

  clickL() {
    console.log('click left');
  }

}
