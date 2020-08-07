import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.backend_url}/users`);
  }

  public findOne(id: number): Observable<User | undefined> {
    return this.http.get<User>(`${environment.backend_url}/users/${id}`);
  }

  public save(user: User): Observable<User> {
    return this.http.post<User>(`${environment.backend_url}/users`, user);
  }
}
