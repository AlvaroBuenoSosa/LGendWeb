import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkinsService {
  private apiUrl = '/market/priceoverview/'; // Cambiado a la ruta del proxy

  constructor(private http: HttpClient) {}

  getSkinPriceRedline(): Observable<any> {
    const params = new HttpParams()
      .set('appid', '730')
      .set('currency', '3')
      .set('market_hash_name', 'AK-47 | Redline (Field-Tested)');

    return this.http.get<any>(this.apiUrl, { params });
  }
}