import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-tab',
  templateUrl: './nav-tab.component.html',
  styleUrls: ['./nav-tab.component.css']
})
export class NavTabComponent implements OnInit {
  @Input() index;

  constructor(
    private router: Router
  ) { }

  navs = [
    { index: '1', text: '首页', target: 'home', icon: 'icon-home-border' },
    { index: '2', text: '预约', target: 'reserve', icon: 'icon-reserve-border' },
    { index: '3', text: '活动', target: 'activity', icon: 'icon-activity-border' },
    { index: '4', text: '发现', target: 'find', icon: 'icon-find-border' },
    { index: '5', text: '我的', target: 'my', icon: 'icon-person-border' }
  ]
  ngOnInit() {
    this.navs.map((item) => {
      if (item.index == this.index) {
        let arr = item.icon.split('-');
        arr[arr.length - 1] = 'full';
        item.icon = arr.join("-");
      }
    })
  }

  selectNav(target) {
    this.router.navigate([target])
  }

}
