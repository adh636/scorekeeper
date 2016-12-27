import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import {ScoreSubmitComponent} from "./score-submit/score-submit.component";

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, HeaderComponent, ScoreSubmitComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
