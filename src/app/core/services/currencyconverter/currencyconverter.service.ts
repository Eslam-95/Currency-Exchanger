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
  private accessKey = 'b22efe41c0d9a9be64e2b53be90f829f';
  constructor(private http: HttpClient) {}

  getAllSybmols(): Observable<Symbols> {
    return this.http.get<Symbols>(`${this.API_URL}symbols`, {
      params: { access_key: `${this.accessKey}` },
    });
  }

  convertCurrency(): Observable<ConvertedCurrency> {
    return this.http.get<ConvertedCurrency>(`${this.API_URL}latest`, {
      params: { access_key: `${this.accessKey}` },
    });
  }
}
