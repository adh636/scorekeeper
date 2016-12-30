import { Component } from '@angular/core';
import {Model} from "../model";
import {SKRestService} from "../skrest.service";
import {ResultsComponent} from "../results/results.component";
import {ResultService} from "../result.service";

@Component({
  moduleId: module.id,
  selector: 'sk-form',
  templateUrl: 'form.component.html'
})

export class FormComponent {
  games: string[] = ['Ping Pong', 'Pool', 'Darts'];
  model = new Model("", ["", ""], "");

  constructor(private skRestService: SKRestService,
              private resultService: ResultService) {

  }



  // get diagnostic() {
  //   return JSON.stringify(this.model);
  // }

  submitResults(): void {
    let postData: any = this.modelToJSON();
    this.skRestService.submitResults(postData).subscribe();
    this.resultService.update();
  }

  private modelToJSON(): any {
    return {
      game: this.model.game,
      playerOne: this.model.players[0],
      playerTwo: this.model.players[1],
      winner: this.model.winner
    };
  }
}