import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShortenPipe } from './pipes/pipe/shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    PipesComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
