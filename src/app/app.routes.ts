import { Routes } from '@angular/router';
import { SocialsComponent } from './components/socials/socials.component';
import { MatchHistoryComponent } from './components/match-history/match-history.component';
import { SkinsComponent } from './components/skins/skins.component';
import { OtrosComponent } from './components/otros/otros.component';

export const routes: Routes = [
  { path: 'socials', component: SocialsComponent },
  { path: 'matchHistory', component: MatchHistoryComponent },
  { path: 'skins', component: SkinsComponent },
  { path: 'otros', component: OtrosComponent },
  { path: '', redirectTo: '/socials', pathMatch: 'full' }
];
