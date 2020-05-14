import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

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
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { RandomWordHomeComponent } from './components/random-word-home/random-word-home.component';
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { TopWordsHomeComponent } from './components/top-words-home/top-words-home.component';
import { NewWordsHomeComponent } from './components/new-words-home/new-words-home.component';
import { LastAddWordsComponent } from './components/last-add-words/last-add-words.component';
import { LastAddWordsHomeComponent } from './components/last-add-words-home/last-add-words-home.component';
import { AddNewWordFormComponent } from './components/add-new-word-form/add-new-word-form.component';
import { SavedComponent } from './components/saved/saved.component';
import { MyWordsComponent } from './components/my-words/my-words.component';
import { SearchBoxWordsComponent } from './components/search-box-words/search-box-words.component';
import { SearchBoxWordsSmallComponent } from './components/search-box-words-small/search-box-words-small.component';


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
    RandomWordComponent,

    FooterComponent,
    HomePageComponent,
    HeaderComponent,
    RandomWordHomeComponent,
    HeaderTopComponent,
    TopWordsHomeComponent,
    NewWordsHomeComponent,
    LastAddWordsComponent,
    LastAddWordsHomeComponent,
    AddNewWordFormComponent,
    SavedComponent,
    MyWordsComponent,
    SearchBoxWordsComponent,
    SearchBoxWordsSmallComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [
    WordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
