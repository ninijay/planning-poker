import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { MainComponent } from './main/main.component';
import { PlayerSelectionComponent } from './player-selection/player-selection.component';
import { StoriesSelectionComponent } from './stories-selection/stories-selection.component';
import { OverviewComponent } from './overview/overview.component';


const routes: Routes = [
  {
    path: 'game/players', component: PlayerSelectionComponent
  },
  {
    path: 'game/stories', component: StoriesSelectionComponent
  },
  {
    path: 'game/start', component: GameComponent
  },
  {
    path: 'game/overview', component : OverviewComponent
  },
  {
    path: '**', component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
