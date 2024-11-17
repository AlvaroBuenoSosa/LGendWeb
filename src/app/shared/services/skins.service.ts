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

  getSkinSaibaOni(): Observable<any> {
    const params = new HttpParams()
      .set('appid', '730') // App ID de CS:GO
      .set('currency', '3') // Código de moneda (3 para Euros)
      .set('market_hash_name', 'MAC-10 | Saibā Oni (Factory New)'); // Nombre del artículo

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map((data: any) => ({
        ...data,
        name: 'MAC-10 | Saibā Oni', // Nombre de la skin
        image: this.imageBaseUrl + '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf3vLLIG1948a3n4m0m_7zO6-fwjkD6sF327GSotyn3wPh_0s4MTj1IIGRcgU3Y17T-FK5w-e9gJa4voOJlyVi4U1JyQ/360fx360f', // URL de la imagen
      }))
    );
  }

  getSkinUspNeoNoir(): Observable<any> { 
    const params = new HttpParams()
      .set('appid', '730') // App ID de CS:GO
      .set('currency', '3') // Código de moneda (3 para Euros)
      .set('market_hash_name', 'USP-S | Neo-Noir (Field-Tested)'); // Nombre del artículo

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map((data: any) => ({
        ...data,
        name: 'USP-S | Neo-Noir (Field-Tested)', // Nombre de la skin
        image: this.imageBaseUrl + '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh-TLPbTYhFRc7cF4n-SP99qm31G1-EJpZmH6JYaWdFJtY1HRrFW_xezt1J_v6JrKnSBhvycn4mGdwUK5GAJRtw/360fx360f', // URL de la imagen
      }))
    );
  }

  getSkinEmperor(): Observable<any> { 
    const params = new HttpParams()
      .set('appid', '730') // App ID de CS:GO
      .set('currency', '3') // Código de moneda (3 para Euros)
      .set('market_hash_name', 'M4A4 | The Emperor (Field-Tested)'); // Nombre del artículo

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map((data: any) => ({
        ...data,
        name: 'M4A4 | The Emperor (Field-Tested)', // Nombre de la skin
        image: this.imageBaseUrl + '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09m7hIWZmOXLPr7Vn35cpsAn3OuTrYit2Afi_ktrNmqiI4eWJlU6NF7Zrwe9wubpjJS7usnKwSZ9-n51LPua7N4/360fx360f', // URL de la imagen
      }))
    );
  }
  
}
