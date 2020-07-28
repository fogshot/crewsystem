import {Injectable} from '@angular/core';
import {Ship} from './ship';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShipService {

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Ship[]> {
    return this.http.get<Ship[]>(`${environment.backend_url}/ships`);
  }
}
