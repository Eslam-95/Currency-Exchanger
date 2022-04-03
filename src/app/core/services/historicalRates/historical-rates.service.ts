import { HistoricalRate } from './../../models/historicalRate';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HistoricalRatesService {
  private API_URL = environment.API_URL;
  private accessKey = 'c2e1829970d0063c5f8dc4cd5351e45b';
  constructor(private http: HttpClient) {}

  getHistoricalRate(date: string, from: string, to: string): Observable<any> {
    return this.http.get<HistoricalRate>(`${this.API_URL}${date}`, {
      params: { access_key: `${this.accessKey}`, symbols: from + ',' + to },
    });
  }
}
