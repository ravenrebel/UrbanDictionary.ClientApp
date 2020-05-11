import { RandomWordComponent } from './components/random-word/random-word.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// import { AddNewWordComponent } from './components/add-new-words/add-new-word.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { WordComponent } from './components/word/word.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';


const routes: Routes = [

  { path: 'main', component: MainPageComponent },
  { path: 'word', component: WordComponent },
  // { path: 'addNewWord', component: AddNewWordComponent },
  { path: 'words/getRandomWord', component: RandomWordComponent },
  { path: 'authorization', component: AuthorizationComponent },

  { path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
