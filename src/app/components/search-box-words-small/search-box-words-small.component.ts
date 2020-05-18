import { Component } from '@angular/core';
import { WordService } from 'src/app/service/word.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box-words-small',
  templateUrl: './search-box-words-small.component.html',
  styleUrls: ['./search-box-words-small.component.css']
})
export class SearchBoxWordsSmallComponent {
  word = '';

  constructor(private wordService: WordService, private router: Router) { }

  search() {
    debugger
    this.wordService.setSeachedWord(this.word);
    this.wordService.getWords(this.word, 0)// 0 because it’s first
      .subscribe(result => {
        this.wordService.setWords(result);
        this.router.navigate(['/searchWord']);
      });
  }
}
