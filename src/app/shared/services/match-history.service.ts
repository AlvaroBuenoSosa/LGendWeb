import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchHistoryService {

  private apiKeySteam = '391CE3115B6FEBFA7800F5AD9F614BE5'; // Reemplaza con tu API Key
  private steamId = '76561198917617584'; // ID de Steam de LGenDOfficial
  private appId = 730; // App ID de CS:G
  private apiTrackerGG = '59315f65-d0c4-4c31-8641-bc4a1c068873';

  // URLs de la API para diferentes solicitudes
  private apiUrlProfile = `/api/ISteamUser/GetPlayerSummaries/v0002/?key=${this.apiKeySteam}&steamids=${this.steamId}`;
  private apiUrlDatosJuegos = `/api/IPlayerService/GetOwnedGames/v0001/?key=${this.apiKeySteam}&steamid=${this.steamId}&include_appinfo=true&include_played_free_games=true`;

  constructor(private http: HttpClient) {}

  // Método para obtener estadísticas de jugador en un rango de fechas específico
  getCsGoPlayerStats(startDate: string, endDate: string): Observable<any> {
    const encodedStartDate = encodeURIComponent(startDate);
    const encodedEndDate = encodeURIComponent(endDate);
  
    // Agrega tanto `gameid` como `appid` en la URL
    const apiUrlPlayerStats = `/api/ISteamGameServerStats/GetGameServerPlayerStatsForGame/v1/?key=${this.apiKeySteam}&gameid=${this.appId}&appid=${this.appId}&rangestart=${encodedStartDate}&rangeend=${encodedEndDate}`;
    return this.http.get<any>(apiUrlPlayerStats);
  }

  // Método para obtener el perfil del jugador
  getPlayerProfile(): Observable<any> {
    return this.http.get<any>(this.apiUrlProfile);
  }

  // Método para obtener los juegos propiedad del usuario
  getOwnedGames(): Observable<any> {
    return this.http.get<any>(this.apiUrlDatosJuegos);
  }

  // Método para obtener estadísticas de partidas jugadas usando la API de TrackerGG
  getMatchHistory(): Observable<any> {
    const apiUrlMatchHistory = `/tracker/v2/csgo/standard/profile/steam/${this.steamId}/matches`;
    const headers = {
      'TRN-Api-Key': this.apiTrackerGG
    };
  
    return this.http.get<any>(apiUrlMatchHistory, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al obtener el historial de partidas:', error);
        return throwError(error);
      })
    );
  }

  

}
