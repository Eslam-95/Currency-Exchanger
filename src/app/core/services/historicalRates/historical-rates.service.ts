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
  private accessKey = '7293edaa71878aff791f36a86d4db477';
  constructor(private http: HttpClient) {}

  getHistoricalRate(date: string, from: string, to: string): Observable<any> {
    return this.http.get<HistoricalRate>(`${this.API_URL}${date}`, {
      params: { access_key: `${this.accessKey}`, symbols: from + ',' + to },
    });
  }
}
