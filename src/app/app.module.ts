import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfectionService } from './infection.service';
import { DisplayDataPipe } from './display-data.pipe';
import { InfectionDirective } from './infection.directive';

@NgModule({
  declarations: [
    AppComponent,
    DisplayDataPipe,
    InfectionDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    InfectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
