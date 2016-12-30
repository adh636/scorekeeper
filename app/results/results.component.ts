import { Component } from '@angular/core';
import {SKRestService} from "../skrest.service";
import {ResultService} from "../result.service";

@Component({
  moduleId: module.id,
  selector: 'sk-results',
  templateUrl: 'results.component.html',
  styleUrls: ["results.component.css"]
})

export class ResultsComponent {
  private results: any;

  constructor(private skRestService: SKRestService, private resultService: ResultService) {}

  // get diagnostic() {
  //   return JSON.stringify(this.model);
  // }

  ngOnInit(): void {
    this.updateResults();
    this.resultService.onUpdate().subscribe(() => {
      // setTimeout(() => {
        this.updateResults();
      // }, 500);
    });
  }

  updateResults(): void {
    this.skRestService.getResults().subscribe((results) => this.results = results);
  }

  getResults(): void {
    this.results.forEach((result: any) => {
        console.log(result.game);
        console.log(result.playerOne);
        console.log(result.playerTwo);
        console.log(result.winner);
    });
  }

  deleteResults(): void {
    this.skRestService.deleteResults().subscribe();
    // setTimeout(() => {
      this.resultService.update();
    // }, 500);
  }

  displayText(result: any): string {
    return result.game + " " + result.playerOne + " " + result.playerTwo + " " + result.winner;
  }


}