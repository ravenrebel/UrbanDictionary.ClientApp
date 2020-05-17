import { environment } from './../../environments/environment.prod';
import { GlobalApiService } from './global-api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WordDTO } from '../model/word-dto';


@Injectable({
  providedIn: 'root'
})
export class WordService {
  url = environment.appUrl;
  constructor(private http: HttpClient, private globalApi: GlobalApiService) { }

  getRandom(): Observable<WordDTO[]> {
    return this.http.get<WordDTO[]>(this.url + '/words/randomWord');
  }

  getWords(serchingItem: string, skipNumber: number): Observable<WordDTO[]> {
    return this.http.get<WordDTO[]>(this.globalApi.SEARCH_WORDS_URL(serchingItem, skipNumber));
  }
}