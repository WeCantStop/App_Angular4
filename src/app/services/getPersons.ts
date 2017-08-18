import {Injectable} from '@angular/core';
import {PERSONS} from '../mock/persons';
import {Person} from '../mock/Person';

@Injectable()

export class GetPersonsService {
    getPersons(): Promise<Person[]> {
        return Promise.resolve(PERSONS);
    }
}
