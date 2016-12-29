import { Component } from '@angular/core';
import {Model} from "../model";
import {SKRestService} from "../skrest.service";

@Component({
  moduleId: module.id,
  selector: 'sk-form',
  templateUrl: 'form.component.html'
})

export class FormComponent {
  games: string[] = ['Ping Pong', 'Pool', 'Darts'];
  model = new Model("", ["", ""], "");

  constructor(private skRestService: SKRestService) {}

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  submitResults(): void {
    let postData: any = this.modelToJSON();
    this.skRestService.submitResults(postData);
  }

  private modelToJSON(): any {
    return {
      "game": this.model.game,
      "playerOne": this.model.players[0],
      "playerTwo": this.model.players[1],
      "winner": this.model.winner
    };
  }
}