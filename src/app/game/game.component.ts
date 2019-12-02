import { Component, OnInit } from '@angular/core';
import { Card } from '../Card';
import { GameSettingsService } from '../game-settings.service';
import { Story } from '../Story';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  currentStory: Story;
  bids: any[];
  cards = [
    new Card(0, "Already done/ No effort"),
    new Card(0.5, "Almost no effort"),
    new Card(1, "Very easy doable"),
    new Card(2, "Requires some effort"),
    new Card(3, "Could take up a minor part of the sprint"),
    new Card(5, "Could take up 50% of the sprint"),
    new Card(8, "Could take up a major part of the sprint"),
    new Card(13, "Could take up the whole sprint"),
    new Card(21, "Should be splited in 2 stories"),
    new Card(50, "Very complex/ complicated"),
    new Card(100, "Should be an EPIC"),
    new Card('?', "Needs more context/explanation from the PO"),
    new Card('break', "I need a break")
  ];

  constructor(
    private gameSettings: GameSettingsService
  ) {
    this.startGame();
  }

  ngOnInit() {

  }

  public startGame() {
    this.getNextStory();
  }

  public addBid(c): void {
    console.log(c);
    this.bids.push(c);
    console.log(this.bids);
  }

  public finishStory(points: number): void {
    this.gameSettings.stories.filter(s => s.id === this.currentStory.id)[0].done = true;
    this.gameSettings.stories.filter(s => s.id === this.currentStory.id)[0].points = points;
    this.getNextStory();
  }

  public finishGame() {
    this.gameSettings.flush();
  }

  private getNextStory(): void {
    let remainingStories = this.gameSettings.stories.filter(s => s.done === false);
    this.currentStory = remainingStories[Math.floor(Math.random() * remainingStories.length)];
    this.bids = [];
  }

}
