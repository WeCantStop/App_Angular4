import { Component, OnInit } from '@angular/core';
import { NavTabComponent } from '../../common/nav-tab/nav-tab.component';
import { HeaderComponent } from '../../common/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  btnClick(){
    console.log(123);
  }

  clickL(){
    console.log("点击左边");
  }

}
