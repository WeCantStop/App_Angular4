import { Component, OnInit, ViewChild } from '@angular/core';
import { FadeIn } from '../../animations/fadeIn.animation';
import { ApiService } from '../../services/doubanAPI';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    // 注册动画
    animations: [ FadeIn ]
})
export class HomeComponent implements OnInit {

    public articles;
    constructor(
        public apiService: ApiService
    ) { }

    ngOnInit() {
        this.apiService.initData({}).subscribe(res => {
            this.articles = res.recommend_feeds;       
        });


    }

}
