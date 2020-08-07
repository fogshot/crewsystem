import {Injectable} from '@angular/core';
import {Ship} from './ship';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShipService {

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Ship[]> {
    return this.http.get<Ship[]>(`${environment.backend_url}/ships`);
  }

  public findOne(id: number): Observable<Ship | undefined> {
    return this.http.get<Ship>(`${environment.backend_url}/ships/${id}`);
  }

  public save(ship: Ship): Observable<Ship> {
    return this.http.post<Ship>(`${environment.backend_url}/ships`, ship);
  }
}
