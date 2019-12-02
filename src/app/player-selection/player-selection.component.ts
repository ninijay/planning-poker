import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GameSettingsService } from '../game-settings.service';

@Component({
  selector: 'app-player-selection',
  templateUrl: './player-selection.component.html',
  styleUrls: ['./player-selection.component.css']
})
export class PlayerSelectionComponent implements OnInit {

  playerForm;

  constructor(
    private gameSettings: GameSettingsService,
    private formBuilder: FormBuilder
  ) {
    this.playerForm = this.formBuilder.group({
      name: '',
      role: ''
    });
  }

  ngOnInit() {
  }

  get players(): any {
    return this.gameSettings.players;
  }

  onSubmit(playerData) {
    this.gameSettings.addPlayer(playerData);
    console.log(this.players);
  }
}
