import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import {ScoreSubmitComponent} from "./score-submit/score-submit.component";
import {FormComponent} from "./form/form.component";

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, HeaderComponent, ScoreSubmitComponent, FormComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
