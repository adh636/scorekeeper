import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import {ScoreSubmitComponent} from "./score-submit/score-submit.component";
import {FormComponent} from "./form/form.component";
import {SKRestService} from "./skrest.service";
import {ResultsComponent} from "./results/results.component";
import {ResultService} from "./result.service";

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule, JsonpModule ],
    declarations: [ AppComponent, HeaderComponent, ScoreSubmitComponent,
      FormComponent, ResultsComponent ],
    providers: [ SKRestService, ResultService ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
