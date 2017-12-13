import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../_models/user';

@Injectable()
export class UserService {

    results: any;

    constructor(private http: HttpClient) {}

    fetchUsers(): Observable<Object> {
        return this.http.get('/api/users');
    }

    fetchUser(_id: string): Observable<Object> {
        return this.http.get('/api/users/' + _id);
    }

    addUser(user: User) {
        console.log(user);
        return this.http.post('/api/users/add-user', user).subscribe();
    }

    updateUser(user: User) {
        return this.http.put('/api/users/' + user._id, user);
    }

    deleteUser(_id: string) {
        return this.http.delete('/api/users/' + _id);
    }
}
