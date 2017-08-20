import { Component, OnInit } from '@angular/core';
import { GetPersonsService } from '../../services/getPersons';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

    private resData;

    constructor(private getPersonService: GetPersonsService, private http: HttpClient) {
    }

    ngOnInit() {
        this.getPersonService.getPersons().then(res => {
            console.log(res);
        }, res => {
            console.log(res);
        });
    }

    // post请求方式
    getDataByPost() {
        this.http.post('http://localhost:3008/users/age', { itemId: 666 }).subscribe(
            (val) => {
                console.log(val);
            },
            response => {
                console.log('POST call in error', response);
            },
            () => {

            });
    }

    // get请求方式
    getDataByGet() {
        this.getPersonService.getDataByGet()
            .subscribe(res => { 
                console.log(res.data);
                this.resData = res.data;
             });
    }
}
