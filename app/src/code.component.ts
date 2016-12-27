import {Component} from "@angular/core";

@Component({
  selector: "my-code",
  templateUrl: "app/src/code.component.html",
  styleUrls: ["app/src/code.component.css"]
})

export class CodeComponent {
  static test(): boolean {
    return true;
  }
}