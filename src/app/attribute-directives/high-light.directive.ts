/**
 * 自定义属性组件
 * 模块解释:
 * Directive => 定义一个指令组件
 * ElementRef => 用于获取DOM,用于DOM操作  需要依赖注入
 * HostListener => 用于监听宿主元素的点击事件  不需要依赖注入
 * Renderer => 调用renderer对象提供的API设置元素的背景颜色 需要依赖注入
 */
import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[heightLight]'
})

export class HighLightDirective {
  @Input('heightLight') backgroundColor: string;

  private _defaultColor = 'yellowgreen';

  constructor(
    private el: ElementRef,
    private render: Renderer
  ) { }

  @HostListener('click') onclick() {
    this.setColor(this.backgroundColor || this._defaultColor);
  }

  private setColor(color: string) {
    this.render.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
