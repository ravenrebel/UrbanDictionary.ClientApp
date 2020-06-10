import { createWordDTO } from './../model/createWord-dto';
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
    return this.http.get<WordDTO[]>(this.globalApi.RANDOM_WORD_URL);
  }

  getWords(searchingItem: string, skipNumber: number): Observable<WordDTO[]> {
    return this.http.get<WordDTO[]>(this.globalApi.SEARCH_WORDS_URL(searchingItem, skipNumber));
  }

  getWordsNumber(searchingItem: string): Observable<number> {
    return this.http.get<number>(this.globalApi.GET_WORDSNUMBER_URL(searchingItem));
  }

  getTopTen(): Observable<WordDTO[]>{
    return this.http.get<WordDTO[]>(this.globalApi.TOP_TEN_URL);
  }

  setWords(words: Array<WordDTO>): void {
    this.words.next(words);
  }

  unsetWords(): void {
    this.words.next(null);
  }

  setSearchedWord(word: string): void {
    this.searchedWord.next(word);
  }

  unsetSearchedWord(): void {
    this.searchedWord.next(null);
  }

  createNewWord(model: createWordDTO){
    return this.http.post(this.globalApi.CREATE_WORD_URL, model);
  }

  getLastWords(): Observable<WordDTO[]>{
    return this.http.get<WordDTO[]>(this.globalApi.LAST_TEN_URL);
  }

  likeWord(id: number): Observable<object>{
    return this.http.post(this.globalApi.LIKE_WORD_URL(id), id);
  }

  dislikeWord(id: number): Observable<object>{
    return this.http.post(this.globalApi.DISLIKE_WORD_URL(id), id);
  }

  deleteWord(id: number): Observable<object>{
    return this.http.delete(this.globalApi.DELETE_WORD_URL(id));
  }

  getWordsByTag(tag: string): Observable<WordDTO[]>{
    return this.http.get<WordDTO[]>(this.globalApi.GET_WORDS_BY_TAG_URL(tag));
  }

  approveWord(id: number): Observable<object>{
    return this.http.post(this.globalApi.APPROVE_WORD_URL(id), id);
  }

  disapproveWord(id: number): Observable<object>{
    return this.http.post(this.globalApi.DISAPPROVE_WORD_URL(id), id);
  }

  getSavedWords(): Observable<WordDTO[]>{
    return this.http.get<WordDTO[]>(this.globalApi.GET_SAVED_WORDS_URL);
  }

  getCreatedWords(): Observable<WordDTO[]>{
    return this.http.get<WordDTO[]>(this.globalApi.GET_CREATED_WORDS_URL);
  }

  saveWord(id: number): Observable<object>{
    return this.http.post(this.globalApi.SAVE_WORD_URL(id), id);
  }

  editWord(model: createWordDTO){
    return this.http.put(this.globalApi.EDIT_WORD_URL, model);
  }

  deleteSavedWord(id: number) {
    return this.http.delete(this.globalApi.DELETE_SAVED_WORD_URL(id));
  }

  deleteCreatedWord(id: number) {
    return this.http.delete(this.globalApi.DELETE_CREATED_WORD_URL(id));
  }

  sendToModerator(id: number) {
    return this.http.post(this.globalApi.SEND_TO_MODERATOR_URL(id), id);
  }
}
