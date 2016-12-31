import { Component } from '@angular/core';
import {Model} from "../model";
import {SKRestService} from "../skrest.service";
import {ResultService} from "../result.service";

@Component({
  moduleId: module.id,
  selector: 'sk-form',
  templateUrl: 'form.component.html',
  styleUrls: [ "form.component.css" ]
})

export class FormComponent {
  model: Model;

  constructor(private skRestService: SKRestService,
              private resultService: ResultService) {
    this.model = new Model("", ["", ""], "");
  }

  submitResults(): void {
    if (this.modelNotFull()) return;
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

  modelNotFull(): boolean {
    return this.model.game === "" || this.model.players[0] === ""
      || this.model.players[1] === "" || this.model.winner === "";
  }
}