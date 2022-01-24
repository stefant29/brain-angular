import { User } from './../../Models/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getLinks(id: string): Observable<Array<string>> {
    return this.http.get<Array<string>>('/api/linked-users?id=' + id);
  }

  public getUsers(search: string): Observable<Array<User>> {
    return this.http.get<Array<User>>('/api/users?search=' + search);
  }

  public getUser(id: string): Observable<User> {
    return this.http.get<User>('/api/user?id=' + id);
  }
}
