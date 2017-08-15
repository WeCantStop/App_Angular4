import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NavTabComponent } from './../../common/nav-tab/nav-tab.component';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnChanges, OnInit {
  @Input() count: number;

  constructor() {
    this.count = 0;
   }

  ngOnInit() {
  }

  /* 它会获得一个 SimpleChanges 对象，包含绑定属性的新值和旧值，它主要用于监测组件输入属性的变化 */
  ngOnChanges(changes: SimpleChanges) {
    console.dir(changes['count']);
  }

  addOne(): void {
    this.count++;
  }

  MuseOne(): void {
    this.count--;
  }

}
