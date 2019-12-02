import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GameSettingsService } from '../game-settings.service';
import { Story } from '../Story';

@Component({
  selector: 'app-stories-selection',
  templateUrl: './stories-selection.component.html',
  styleUrls: ['./stories-selection.component.css']
})
export class StoriesSelectionComponent implements OnInit {

  storiesform;

  constructor(
    private gameSettings: GameSettingsService,
    private formBuilder: FormBuilder
  ) {
    this.storiesform = this.formBuilder.group({
      name: '',
      description: '',
      points: 0
    });
  }

  ngOnInit() {
  }

  get stories(): any {
    return this.gameSettings.stories;
  }

  onSubmit(storyData) {
    let s = new Story();
    s.name = storyData["name"];
    s.description = storyData["description"];
    s.points = 0;
    s.done = false;
    s.id = Math.floor(Math.random() * 99999);
    this.gameSettings.addStory(s);
    console.log(this.stories);
  }
}
