import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    persons = ['one', 'two', 'three', 'four'];

    ngOnInit() {
    }

    btnClick() {
        console.log('test click');
    }

    clickL() {
        console.log('click left');
    }

}
