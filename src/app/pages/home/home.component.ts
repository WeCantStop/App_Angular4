import { Component, OnInit } from '@angular/core';
import { NavTabComponent } from '../../common/nav-tab/nav-tab.component';
import { HeaderComponent } from '../../common/header/header.component';
import { HighLightDirective } from './../../attribute-directives/high-light.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  persons = ['刘备', '关羽', '张飞', '赵云'];

  ngOnInit() {
  }

  btnClick() {
    console.log('test click');
  }

  clickL() {
    console.log("click left");
  }

}
