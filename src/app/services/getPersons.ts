import {Injectable} from '@angular/core';
import {PERSONS} from '../mock/persons';
import {Person} from '../mock/Person';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class GetPersonsService {
    constructor(private http: HttpClient) {
    }

    getPersons(): Promise<Person[]> {
        return Promise.resolve(PERSONS);
    }

    getDataByGet() {
        return new Promise((resolve, reject) => {
            this.http.get('http://localhost:3008/users/queryDuoDuo')
                .subscribe(
                (res) => {
                    resolve(res);
                }
            );
        });
    }
}
