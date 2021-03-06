import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()

export class ApiService {
    /** 设置请求头 **/
    headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    constructor(private http: Http) {
    }

    initData(data): Observable<any> {
        return this.http.post('http://localhost:3001/api/index', data).map(res => res.json());
    }
}
