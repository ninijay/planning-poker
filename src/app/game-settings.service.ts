import { Injectable } from '@angular/core';
import { Story } from './Story';

@Injectable({
  providedIn: 'root'
})
export class GameSettingsService {
  private _players = [];
  private _stories: Story[] = [];

  constructor() { }

  public addPlayer(playerdata: any): void {
    this._players.push(playerdata);
    sessionStorage.setItem("players", JSON.stringify(this._players));
  }

  public addStory(storydata: Story): void {
    this._stories.push(storydata);
    sessionStorage.setItem("stories", JSON.stringify(this._stories));
  }

  public flush(): void {
    sessionStorage.clear();
  }

  get players(): any {
    this._players = JSON.parse(sessionStorage.getItem("players")) || [];
    return this._players;
  }

  get stories(): Story[] {
    this._stories = JSON.parse(sessionStorage.getItem("stories")) || [];
    return this._stories;
  }
}
