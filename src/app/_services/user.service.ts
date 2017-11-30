import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/user';

@Injectable()
export class UserService {

    results: any;

    constructor(private http: HttpClient) {}

    getAll() {
        this.http.get('/users').subscribe(data => {
            this.results = data;
        });

        return this.results;
    }

    getById(_id: string) {
        this.http.get('/users/' + _id).subscribe(data => {
            this.results = data;
        });

        return this.results;
    }

    addUser(user: User) {
        return this.http.post('/users/add-user', user);
    }

    updateUser(user: User) {
        return this.http.post('/users/' + user._id, user);
    }

    deleteUser(_id: string) {
        return this.http.delete('/users/' + _id);
    }
}
