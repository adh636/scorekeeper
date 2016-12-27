import {Component} from "@angular/core";

@Component({
  selector: "sc-header",
  templateUrl: "app/header/header.component.html",
  styleUrls: ["app/header/header.component.css"]
})

export class HeaderComponent {
  appName: string;

  constructor() {
    this.appName = "Score Keeper";
  }
}