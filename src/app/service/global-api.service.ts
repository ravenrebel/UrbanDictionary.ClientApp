import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
@Injectable()

export class GlobalApiService {
    URL = environment.appUrl;
    accountApi = this.URL + 'account';
    LOGIN_API = this.accountApi + '/signIn';
    SIGNUP_API = this.accountApi + '/signUp';
    WORD_URL = this.URL + 'words';
    CREATE_WORD_URL = this.URL + 'currentUser/createWord';

    SEARCH_WORDS_URL(serchedItem: string, skipNumber: number) {
        return `${this.WORD_URL}/search/${serchedItem}/${skipNumber}`;
    }

    GET_WORDSNUMBER_URL(serchedItem: string) {
        return `${this.WORD_URL}/searchCount/${serchedItem}`;
    }

}
