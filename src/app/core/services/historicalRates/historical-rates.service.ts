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
  private accessKey = '8ee7887556fcb7a18a2c3a2a30ef576d';
  constructor(private http: HttpClient) {}

  getHistoricalRate(
    date: string,
    from: string,
    to: string
  ): Observable<HistoricalRate> {
    return this.http.get<HistoricalRate>(`${this.API_URL}${date}`, {
      params: { access_key: `${this.accessKey}`, symbols: from + ',' + to },
    });
  }
}
