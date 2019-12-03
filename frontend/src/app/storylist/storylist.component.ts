import { Component, OnInit } from '@angular/core';
import { GameSettingsService } from '../game-settings.service';

@Component({
  selector: 'app-storylist',
  templateUrl: './storylist.component.html',
  styleUrls: ['./storylist.component.css']
})
export class StorylistComponent implements OnInit {

  constructor(
    private gameSettings: GameSettingsService
  ) { }

  ngOnInit() {
  }

  get stories(){
    return this.gameSettings.stories;
  }
}
