import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { SkinType } from 'ngx-weui';
import { ActionSheetService, ActionSheetConfig, ActionSheetComponent } from 'ngx-weui/actionsheet';

import { Mask } from '../../animations/mask';
import { FadeIn } from '../../animations/fadeIn.animation';
import { MaskComponent } from '../../components/mask/mask.component';
import { ApiService } from '../../services/doubanAPI';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    // 注册动画
    animations: [ Mask, FadeIn ]
})
export class HomeComponent implements OnInit {
    @ViewChild('ios') iosAS: ActionSheetComponent;
    @ViewChild('mask') mask: MaskComponent;
    menus: any[] = [
        { text: 'item1', key: '1' },
        { text: 'item2', key: '2' },
        { text: 'item3', key: '3' }
    ];
    config: ActionSheetConfig = <ActionSheetConfig>{
        title: '请选择其中一个item'
    };

    public show = 'show';
    constructor(
        public translate: TranslateService,
        public actionSheet: ActionSheetService,
        public apiService: ApiService
    ) { }

    persons = ['one', 'two', 'three', 'four'];

    ngOnInit() {
        this.apiService.initData({}).subscribe(res => {
            console.log(res);
        });
    }

    btnClick() {
        this.translate.currentLang === 'zh_CN' ? this.translate.use('en_US') : this.translate.use('zh_CN');
    }

    clickL() {
        console.log('click left');
    }

    onShow(type: SkinType) {
        this.config.skin = type;
        this.config = Object.assign({}, this.config);
        setTimeout(() => {
            (<ActionSheetComponent>this[`${type}AS`]).show().subscribe((res: any) => {
                console.log('type', res);
            });
        }, 10);
    }

    animate(isNormal: boolean = false) {
        this.mask.show();
        this.mask.backdrop = true;
    }

}
