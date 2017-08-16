import {Component, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import { SkinType } from 'ngx-weui';
import {ActionSheetService, ActionSheetConfig, ActionSheetComponent} from 'ngx-weui/actionsheet';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    @ViewChild('ios') iosAS: ActionSheetComponent;
    menus: any[] = [
        {text: 'item1', key: '1'},
        {text: 'item2', key: '2'},
        {text: 'item3', key: '3'}
    ];
    config: ActionSheetConfig = <ActionSheetConfig>{
        title: '请选择其中一个item'
    };
    constructor(
        public translate: TranslateService,
        public actionSheet: ActionSheetService
    ) { }

    persons = ['one', 'two', 'three', 'four'];

    ngOnInit() {
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

}
