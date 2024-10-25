import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkinsService {
  private apiUrl = '/market/priceoverview/'; // Cambiado a la ruta del proxy
  private imageBaseUrl = 'https://community.cloudflare.steamstatic.com/economy/image/';

  constructor(private http: HttpClient) {}

  getSkinGoldenKoi(): Observable<any> {
    const params = new HttpParams()
      .set('appid', '730') // App ID de CS:GO
      .set('currency', '3') // Código de moneda (3 para Euros)
      .set('market_hash_name', 'Desert Eagle | Golden Koi (Factory New)'); // Nombre del artículo

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map((data: any) => ({
        ...data,
        name: 'Desert Eagle | Golden Koi (Factory New)', // Nombre de la skin
        image: this.imageBaseUrl + '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTi5B7dCzh7-JhfbiPITdn2xZ_Ismi7DA9tWg0VHm_EVtY2iicoTAdAI3YFGBq1XowObp05K9v8-YnycxpGB8ssNrD69j/360fx360f', // URL de la imagen
      }))
    );
  }

  getSkinHotRod(): Observable<any> {
    const params = new HttpParams()
      .set('appid', '730') // App ID de CS:GO
      .set('currency', '3') // Código de moneda (3 para Euros)
      .set('market_hash_name', 'M4A1-S | Hot Rod (Factory New)'); // Nombre del artículo

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map((data: any) => ({
        ...data,
        name: 'M4A1-S | Hot Rod (Factory New)', // Nombre de la skin
        image: this.imageBaseUrl + '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mr-ZkvPLPu_Qx3hu5Mx2gv2Pp9yn31Li_ERtYW70dYaXdFI8NVvYq1i7xOrohcTt7sudySZnsyNz7GGdwUICPND1TA/360fx360f', // URL de la imagen
      }))
    );
  }

  getSkinPlayerTwo(): Observable<any> {
    const params = new HttpParams()
      .set('appid', '730') // App ID de CS:GO
      .set('currency', '3') // Código de moneda (3 para Euros)
      .set('market_hash_name', 'M4A1-S | Player Two (Factory New)'); // Nombre del artículo

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map((data: any) => ({
        ...data,
        name: 'M4A1-S | Player Two (Factory New)', // Nombre de la skin
        image: this.imageBaseUrl + '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITShWxeupUl0tbN_Iv9nBqxrUA9MWmhINKUIFU9N1rT_AK3lbjnjcLo6ZuazXA1u3R34yzdzha_n1gSORVcLpnc/360fx360f', // URL de la imagen
      }))
    );
  }

  getSkinPrintStream(): Observable<any> {
    const params = new HttpParams()
      .set('appid', '730') // App ID de CS:GO
      .set('currency', '3') // Código de moneda (3 para Euros)
      .set('market_hash_name', 'M4A1-S | Printstream (Factory New)'); // Nombre del artículo

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map((data: any) => ({
        ...data,
        name: 'M4A1-S | Printstream (Factory New)', // Nombre de la skin
        image: this.imageBaseUrl + '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITBhGJf_NZlmOzA-LP5gVO8v11qa2n6dtOcIQVoMFHUqwC9wei7jcO5vZ3AzSQ1vCMls3fayxKyhh1McKUx0sfzkVMr/360fx360f', // URL de la imagen
      }))
    );
  }
  
}
