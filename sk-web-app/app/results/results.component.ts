import {Component} from '@angular/core';
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

  ngOnInit(): void {
    this.updateResults();
    this.resultService.onUpdate().subscribe(() => {
      setTimeout(() => {
        this.updateResults();
      }, 500);
    });
  }

  updateResults(): void {
    this.skRestService.getResults().subscribe((results) => this.results = results);
  }

  deleteResults(): void {
    this.skRestService.deleteResults().subscribe();
    this.resultService.update();
  }
}