import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../../envirpments/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutUsService {
  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(enviroment.apiUrl + '/api/fora-w-s');
  }
}
