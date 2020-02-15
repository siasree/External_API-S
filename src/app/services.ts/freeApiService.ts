import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Posts } from '../classes/posts';

@Injectable()

export class freeApiService {

    constructor(private http: HttpClient) { }

    getComments(): Observable<any> {
        return this.http.get("http://jsonplaceholder.typicode.com/posts/1/comments");
    }

    getCommentsByParamameters(): Observable<any> {
        let params1 = new HttpParams().set("userId", "1");
        return this.http.get("http://jsonplaceholder.typicode.com/posts?userId=1", { params: params1 });
    }

    post(opost: Posts): Observable<any> {
        return this.http.post("https://jsonplaceholder.typicode.com/posts", opost);
    }

    put(opost): Observable<any> {
        return this.http.put('https://jsonplaceholder.typicode.com/posts/1', opost);
    }

    patch(opost): Observable<any> {
        return this.http.patch('https://jsonplaceholder.typicode.com/posts/1', opost);
    }


    delete(): Observable<any> {
        return this.http.delete("https://jsonplaceholder.typicode.com/posts/1");
    }
}