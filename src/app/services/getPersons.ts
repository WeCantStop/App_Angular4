import { Injectable } from '@angular/core';
import { PERSONS } from '../mock/persons';
import { Person } from '../mock/Person';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { DataType } from '../mock/mockData';

@Injectable()

export class GetPersonsService {
    /** 设置请求头 **/
    headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    constructor(private http: HttpClient, private https: Http) {
    }

    getPersons(): Promise<Person[]> {
        return Promise.resolve(PERSONS);
    }

    getDataByGet(): Observable<DataType> {
        return this.https.post('http://localhost:3000/users/age', { itemId: 123 }).map(res => res.json());
    }
}
