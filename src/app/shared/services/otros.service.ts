import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OtrosService {
  private rainforestApiUrl = 'https://api.rainforestapi.com/request';
  private apiKey = '5443C7F8EB7E475FB54FFC0428FB5CC1'; // Sustituye con tu clave de API

  constructor(private http: HttpClient) {}

  getProductDetailsRyzen7800x(asin: string): Observable<any> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('type', 'product')
      .set('amazon_domain', 'amazon.es')
      .set('asin', asin);

    return this.http.get<any>(this.rainforestApiUrl, { params }).pipe(
      map((data: any) => ({
        name: data.product?.title || 'Producto no encontrado',
        price: data.product?.buybox_winner?.price?.value || 'Precio no disponible',
        currency: data.product?.buybox_winner?.price?.currency || '',
        image: 'https://m.media-amazon.com/images/I/51HqC0rU9HL._AC_SX425_.jpg',
        url: `https://www.amazon.es/dp/${asin}`
      })),
      catchError(this.handleError)
    );
  }
  
  getProductDetailsRyzen7950X3D (asin: string): Observable<any> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('type', 'product')
      .set('amazon_domain', 'amazon.es')
      .set('asin', asin);

    return this.http.get<any>(this.rainforestApiUrl, { params }).pipe(
      map((data: any) => ({
        name: data.product?.title || 'Producto no encontrado',
        price: data.product?.buybox_winner?.price?.value || 'Precio no disponible',
        currency: data.product?.buybox_winner?.price?.currency || '',
        image: 'https://m.media-amazon.com/images/I/51HqC0rU9HL._AC_SX425_.jpg',
        url: `https://www.amazon.es/dp/${asin}`
      })),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error al comunicarse con la API:', error.error || error.message);
    return throwError(() => new Error('Error al comunicarse con la API. Intenta nuevamente.'));
  }
}



