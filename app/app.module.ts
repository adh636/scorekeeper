import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import {CodeComponent} from "./src/code.component";

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, CodeComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
