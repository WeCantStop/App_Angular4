import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-tab',
  templateUrl: './nav-tab.component.html',
  styleUrls: ['./nav-tab.component.css']
})
export class NavTabComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  navs = [
    { index: '1', text: '首页', target: 'home' },
    { index: '2', text: '预约', target: 'reserve' },
    { index: '3', text: '活动', target: 'activity'},
    { index: '4', text: '发现', target: 'find'},
    { index: '5', text: '我的', target: 'my'}
  ]
  ngOnInit() {

  }

  selectNav(target) {
    this.router.navigate([target])
  }

}
