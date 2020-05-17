import { environment } from './../../environments/environment.prod';
import { GlobalApiService } from './global-api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { WordDTO } from '../model/word-dto';


@Injectable({
  providedIn: 'root'
})
export class WordService {
  public words$: Observable<Array<WordDTO>>;
  private words: BehaviorSubject<Array<WordDTO>>;

  public searchedWord$: Observable<string>;
  private searchedWord: BehaviorSubject<string>;

  url = environment.appUrl;
  constructor(private http: HttpClient, private globalApi: GlobalApiService) {
    this.words = new BehaviorSubject<Array<WordDTO>>(null);
    this.words$ = this.words.asObservable();

    this.searchedWord = new BehaviorSubject<string>(null);
    this.searchedWord$ = this.searchedWord.asObservable();
  }

  getRandom(): Observable<WordDTO[]> {
    return this.http.get<WordDTO[]>(this.url + '/words/randomWord');
  }

  getWords(serchingItem: string, skipNumber: number): Observable<WordDTO[]> {
    return this.http.get<WordDTO[]>(this.globalApi.SEARCH_WORDS_URL(serchingItem, skipNumber));
  }

  getWordsNumber(serchingItem: string): Observable<number> {
    return this.http.get<number>(this.globalApi.GET_WORDSNUMBER_URL(serchingItem));
  }

  setWords(words: Array<WordDTO>): void {
    this.words.next(words);
  }
  unsetWords(): void {
    this.words.next(null);
  }

  setSeachedWord(word: string): void {
    this.searchedWord.next(word);
  }

  unsetSeachedWord(): void {
    this.searchedWord.next(null);
  }
}