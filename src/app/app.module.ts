import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PlayerSelectionComponent } from './player-selection/player-selection.component';
import { StoriesSelectionComponent } from './stories-selection/stories-selection.component';
import { GameComponent } from './game/game.component';
import { CardComponent } from './card/card.component';
import { OverviewComponent } from './overview/overview.component';
import { PlayerlistComponent } from './playerlist/playerlist.component';
import { StorylistComponent } from './storylist/storylist.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PlayerSelectionComponent,
    StoriesSelectionComponent,
    GameComponent,
    CardComponent,
    OverviewComponent,
    PlayerlistComponent,
    StorylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
