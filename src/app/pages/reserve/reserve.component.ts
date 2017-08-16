import {Component, OnInit} from '@angular/core';
import {PickerData, PickerOptions, PickerService} from 'ngx-weui/picker';

@Component({
    selector: 'app-reserve',
    templateUrl: './reserve.component.html',
    styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
    res: any = {
        mitem: ''
    };

    itemGroup: any = [
        [
            {
                label: 'Item1',
                value: 1
            },
            {
                label: 'Item2 (Disabled)',
                disabled: true,
                value: 2
            },
            {
                label: 'Item3',
                value: 3
            },
            {
                label: 'Item4',
                value: 4
            },
            {
                label: 'Item5',
                value: 5
            }
        ]
    ];

    constructor(private srv: PickerService) {
    }

    ngOnInit() {
    }
}
