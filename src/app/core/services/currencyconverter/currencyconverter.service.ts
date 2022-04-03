import { environment } from './../../../../environments/environment.prod';
import { ConvertedCurrency } from '../../models/convertCurrency';
import { Symbols } from '../../models/symbols';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyconverterService {
  private API_URL = environment.API_URL;
  private accessKey = '7293edaa71878aff791f36a86d4db477';
  constructor(private http: HttpClient) {}

  getAllSybmols(): Observable<Symbols> {
    return this.http.get<Symbols>(`${this.API_URL}symbols`, {
      params: { access_key: `${this.accessKey}` },
    });
  }

  getDefaultCurrency(symbol: string): Observable<any> {
    return this.http.get<ConvertedCurrency>(`${this.API_URL}latest`, {
      params: { access_key: `${this.accessKey}`, symbols: symbol },
    });
  }

  convertCurrency(): Observable<any> {
    return this.http.get<ConvertedCurrency>(`${this.API_URL}latest`, {
      params: { access_key: `${this.accessKey}` },
    });
  }
}
