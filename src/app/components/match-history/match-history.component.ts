import { Component, OnInit } from '@angular/core';
import { MatchHistoryService } from '../../shared/services/match-history.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-match-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.scss']
})
export class MatchHistoryComponent implements OnInit {

  playerProfile: any;
  ownedGames: any[] = [];
  csGoStats: any;
  csStatsData: any;  // Nueva variable para almacenar los datos del jugador desde CSStats
  playerData: any;
  matchHistory: any;  // Nueva variable para almacenar el historial de partidas

  constructor(private matchHistoryService: MatchHistoryService) {}

  ngOnInit(): void {
    this.loadPlayerProfile();
    this.loadOwnedGames();
    this.loadMatchHistory();  // Cargar el historial de partidas
  }

  // Cargar perfil del jugador desde la API de Steam
  loadPlayerProfile() {
    this.matchHistoryService.getPlayerProfile().subscribe({
      next: (data) => {
        this.playerProfile = data.response.players[0];
        console.log(this.playerProfile);
      },
      error: (err) => {
        console.error('Error fetching player profile:', err);
      }
    });
  }

  // Cargar juegos propiedad del usuario desde la API de Steam
  loadOwnedGames() {
    this.matchHistoryService.getOwnedGames().subscribe({
      next: (data) => {
        this.ownedGames = data.response.games;
        console.log(this.ownedGames);
      },
      error: (err) => {
        console.error('Error fetching owned games:', err);
      }
    });
  }

  // Cargar historial de partidas usando la API de TrackerGG
  loadMatchHistory() {
    this.matchHistoryService.getMatchHistory().subscribe({
      next: (data) => {
        this.matchHistory = data;
        console.log('Historial de partidas:', this.matchHistory);
      },
      error: (err) => {
        console.error('Error al obtener el historial de partidas:', err);
      }
    });
  }
}






