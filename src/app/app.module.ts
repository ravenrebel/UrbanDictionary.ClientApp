import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { WordComponent } from './components/word/word.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetStartedMainComponent } from './components/get-started-main/get-started-main.component';
import { AddNewWordMainComponent } from './components/add-new-word-main/add-new-word-main.component';
import { FooterMainComponent } from './components/footer-main/footer-main.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SvgComponent } from './components/svg/svg.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { TopWordsComponent } from './components/top-words/top-words.component';

import {WordService} from './service/word.service';
import { RandomWordComponent } from './components/random-word/random-word.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    GetStartedMainComponent,
    AddNewWordMainComponent,
    FooterMainComponent,
    MainPageComponent,
    SvgComponent,
    CheckInComponent,
    TopWordsComponent,
    WordComponent,
    NotFoundPageComponent,
    RandomWordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    WordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
