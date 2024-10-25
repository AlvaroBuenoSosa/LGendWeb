import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchHistoryService {

  private apiKey = '391CE3115B6FEBFA7800F5AD9F614BE5'; // Reemplaza con tu API Key
  private steamId = '76561198917617584'; // ID de Steam de LGenDOfficial

  private apiUrlProfile = `/api/ISteamUser/GetPlayerSummaries/v0002/?key=${this.apiKey}&steamids=${this.steamId}`;
  private apiUrlDatosJuegos = `/api/IPlayerService/GetOwnedGames/v0001/?key=${this.apiKey}&steamid=${this.steamId}&include_appinfo=true&include_played_free_games=true`;
  private apiUrlStatsCs = `/api/ISteamUserStats/GetGlobalStatsForGame/v0001/?appid=730&count=1&name[0]=total_kills&key=${this.apiKey}`;;

  constructor(private http: HttpClient) {}

  getPlayerProfile(): Observable<any> {
    return this.http.get<any>(this.apiUrlProfile);
  }

  getOwnedGames(): Observable<any> {
    return this.http.get<any>(this.apiUrlDatosJuegos);
  }

  getCsGoStats(): Observable<any> {
    return this.http.get<any>(this.apiUrlStatsCs);
  }
}
