import { ConvertedCurrency } from './../models/convertCurrency';
import { Symbols } from './../models/symbols';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyconverterService {
  private API_URL = environment.API_URL;
  private accessKey = 'e063bcecb070f8c3d9f479a554a9cbee';
  constructor(private http: HttpClient) {}

  getAllSybmols(): Observable<Symbols> {
    return this.http.get<Symbols>(`${this.API_URL}symbols`, {
      params: { access_key: `${this.accessKey}` },
    });
  }

  // The current subscription plan does not support this API endpoint.
  // convertCurrency(body: {
  //   access_key: string;
  //   to: string;
  //   from: string;
  //   amount: string;
  // }): Observable<ConvertedCurrency> {
  //   body.access_key = this.accessKey;
  //   return this.http.get<ConvertedCurrency>(`${this.API_URL}convert`, {
  //     params: body,
  //   });
  // }

  convertCurrency(): Observable<ConvertedCurrency> {
    return this.http.get<ConvertedCurrency>(`${this.API_URL}latest`, {
      params: { access_key: `${this.accessKey}` },
    });
  }
}
