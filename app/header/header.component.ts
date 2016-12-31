import {Component} from "@angular/core";

@Component({
  selector: "sk-header",
  templateUrl: "app/header/header.component.html",
  styleUrls: ["app/header/header.component.css"]
})

export class HeaderComponent {
  appName: string;

  constructor() {
    this.appName = "scorekeeper";
  }
}