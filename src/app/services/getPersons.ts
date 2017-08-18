import {Injectable} from '@angular/core';
import {PERSONS} from '../mock/persons';
import {Person} from '../mock/Person';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()

export class GetPersonsService {
    /** 设置请求头 **/
    headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    constructor(private http: HttpClient) {
    }

    getPersons(): Promise<Person[]> {
        return Promise.resolve(PERSONS);
    }

    getDataByGet() {
        return new Promise((resolve, reject) => {
            this.http.post('http://localhost:3008/users/age', {itemId: 123}, {headers: this.headers})
                .subscribe(
                    (res) => {
                        resolve(res);
                    }
                );
        });
    }
}
