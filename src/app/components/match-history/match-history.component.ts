import { Component, OnInit } from '@angular/core';
import { MatchHistoryService } from '../../shared/services/match-history.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-match-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './match-history.component.html',
  styleUrl: './match-history.component.scss'
})
export class MatchHistoryComponent implements OnInit {

  playerProfile: any;
  ownedGames: any[] = [];
  csGoStats: any;

  constructor(private matchHistoryService: MatchHistoryService) {}

  ngOnInit(): void {
    this.loadPlayerProfile();
    this.loadOwnedGames();
    this.loadCsGoStats();
  }

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

  loadCsGoStats() {
    this.matchHistoryService.getCsGoStats().subscribe({
      next: (data) => {
        this.csGoStats = data;
        console.log(this.csGoStats);
      },
      error: (err) => {
        console.error('Error fetching CS:GO stats:', err);
      }
    });
  }
}
