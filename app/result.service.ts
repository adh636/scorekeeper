import { Injectable } from "@angular/core";
import { Observer } from "rxjs/Observer";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ResultService {
  private results$: Observable<any>;
  private resultsObserver: Observer<any>;

  constructor() {
    this.results$ = new Observable<any>((observer: Observer<any>) => {
      this.resultsObserver = observer;
    });
  }

  onUpdate(): Observable<any> {
    return this.results$;
  }

  update(): void {
    if (this.resultsObserver) this.resultsObserver.next(true);
  }
}