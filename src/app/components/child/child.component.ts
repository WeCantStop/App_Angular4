import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    @Input() account: string;
    @Output() send: EventEmitter<any> = new EventEmitter<any>();
    name = 'Tom';
    age = 18;

    constructor() {
    }

    ngOnInit() {
    }

    sendToParent() {
        const data = {
            name: this.name,
            age: this.age
        };
        this.send.emit(data);
    }

}
