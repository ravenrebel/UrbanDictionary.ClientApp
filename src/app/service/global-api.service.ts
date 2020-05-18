import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
@Injectable()

export class GlobalApiService {
    URL = environment.appUrl;
    accountApi = this.URL + 'account';
    LOGIN_API = this.accountApi + '/signIn';
    SIGNUP_API = this.accountApi + '/signUp';
    WORD_URL = this.URL + 'words';
    CURRENT_USER_URL = this.URL + 'currentUser';
    TOPTEN_URL = this.URL + 'words/topTen';
    LAST_TEN_URL = this.URL + 'words/lastTen';
    CREATE_WORD_URL = this.URL + 'currentUser/createWord';
    GET_SAVED_WORDS_URL = this.URL + 'currentUser/savedWords';
    GET_CREATED_WORDS_URL = this.URL + 'currentUser/createdWords';
    EDIT_WORD_URL = this.URL + 'currentUser/editWord';

    LIKE_WORD_URL(id: number){
      return `${this.WORD_URL}/like/${id}`;
    }

    DISLIKE_WORD_URL(id: number){
    return `${this.WORD_URL}/dislike/${id}`;
    }

    APPROVE_WORD_URL(id: number){
      return `${this.WORD_URL}/approve/${id}`;
    }

    DISAPPROVE_WORD_URL(id: number){
      return `${this.WORD_URL}/disapprove/${id}`;
    }

    DELETE_WORD_URL(id: number){
      return `${this.WORD_URL}/delete/${id}`;
    }

    GET_WORDS_BY_TAG_URL(tag: string){
      return `${this.WORD_URL}/getByTag/${tag}`;
    }

    SEARCH_WORDS_URL(searchedItem: string, skipNumber: number) {
          return `${this.WORD_URL}/search/${searchedItem}/${skipNumber}`;
      }

    GET_WORDSNUMBER_URL(searchedItem: string) {
      return `${this.WORD_URL}/searchCount/${searchedItem}`;
    }

    SAVE_WORD_URL(id: number){
      return `${this.CURRENT_USER_URL}/saveWord/${id}`;
    }

    DELETE_SAVED_WORD_URL(id: number){
      return `${this.CURRENT_USER_URL}/deleteSavedWord/${id}`;
    }

    DELETE_CREATED_WORD_URL(id: number){
      return `${this.CURRENT_USER_URL}/deleteCreatedWord/${id}`;
    }

    SEND_TO_MODERATOR_URL(id: number){
      return `${this.CURRENT_USER_URL}/sendToModerator/${id}`;
    }
}
