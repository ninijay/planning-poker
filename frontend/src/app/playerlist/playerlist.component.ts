import { Component, OnInit, Input } from '@angular/core';
import { GameSettingsService } from '../game-settings.service';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})
export class PlayerlistComponent implements OnInit {
  constructor(
    private gameSettings: GameSettingsService
  ) { }

  ngOnInit() {
  }

  get players()
  {
    return this.gameSettings.players;
  }
}
