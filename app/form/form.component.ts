import { Component } from '@angular/core';
import {Model} from "../model";

@Component({
  moduleId: module.id,
  selector: 'sk-form',
  templateUrl: 'form.component.html'
})

export class FormComponent {
  games: string[] = ['Ping Pong', 'Pool', 'Darts'];
  model = new Model("", ["", ""], "");

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}