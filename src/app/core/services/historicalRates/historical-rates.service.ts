import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HistoricalRatesService {
  private API_URL = environment.API_URL;
  private accessKey = 'f4a2b5065ac986f721f0b1993f2e6e39';
  constructor(private http: HttpClient) {}
}
