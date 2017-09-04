import { trigger, state, style, transition, animate } from '@angular/animations';
export const Mask = [ // 动画的内容
  trigger('mask', [
    // state 控制不同的状态下对应的不同的样式
    state('show' , style({ opacity: 0.7, backgroundColor: 'rgb(0,0,0)' })),
    state('hide', style({ opacity: 0, backgroundColor: 'rgb(255,255,255)' })),
    // transition 控制状态到状态以什么样的方式来进行转换
    transition('show <=> hide', animate('300ms liner')),
    // transition('hide => show', animate('300ms'))
  ])
];
