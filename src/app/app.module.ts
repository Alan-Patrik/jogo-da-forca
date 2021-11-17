import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WrapperComponent } from './pages/wrapper/wrapper.component';
import { WordsUsedComponent } from './components/words-used/words-used.component';
import { ResultsComponent } from './components/results/results.component';
import { WinnerComponent } from './components/winner/winner.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WrapperComponent,
    WordsUsedComponent,
    ResultsComponent,
    WinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
