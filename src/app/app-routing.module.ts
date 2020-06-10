import { ModeratorPageComponent } from './components/moderator-page/moderator-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { SavedComponent } from './components/saved/saved.component';
import { LastAddWordsHomeComponent } from './components/last-add-words-home/last-add-words-home.component';
import { RandomWordHomeComponent } from './components/random-word-home/random-word-home.component';
import { RandomWordComponent } from './components/random-word/random-word.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// import { AddNewWordComponent } from './components/add-new-words/add-new-word.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { WordComponent } from './components/word/word.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TopWordsHomeComponent } from './components/top-words-home/top-words-home.component';
import { MyWordsComponent } from './components/my-words/my-words.component';
import { AddNewWordFormComponent } from './components/add-new-word-form/add-new-word-form.component';
import { SearchWordsComponent } from './components/search-words/search-words.component';
import { AuthenticationGuard } from './guards/AuthenticationGuard';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'randomWord', component: RandomWordHomeComponent },
  { path: 'topWords', component: TopWordsHomeComponent },
  { path: 'lastAdded', component: LastAddWordsHomeComponent },
  { path: 'saved', component: SavedComponent, canActivate: [AuthenticationGuard]},
  { path: 'myWords', component: MyWordsComponent, canActivate: [AuthenticationGuard] },
  // { path: 'addNewWord', component: AddNewWordFormComponent, canActivate: [AuthentificationGuard] },
  { path: 'addNewWord', component: AddNewWordFormComponent }, //delete this
  { path: 'searchWord', component: SearchWordsComponent },

  { path: 'admin', component: AdminPageComponent },
  { path: 'moderator', component: ModeratorPageComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'word', component: WordComponent },
  { path: 'words/getRandomWord', component: RandomWordComponent },
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'tag', component: TagListComponent },

  { path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
