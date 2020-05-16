import { Component, OnInit } from '@angular/core';
import { WordService } from 'src/app/service/word.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box-words',
  templateUrl: './search-box-words.component.html',
  styleUrls: ['./search-box-words.component.css']
})
export class SearchBoxWordsComponent {
  wordControll = new FormControl('', [Validators.required]);

  constructor(private wordService: WordService, private router: Router) { }

  search() {
    this.wordService.setSeachedWord(this.wordControll.value);
    this.wordService.getWords(this.wordControll.value, 0)// 0 because it’s first
      .subscribe(result => {
        this.wordService.setWords(result);
        this.router.navigate(['/searchWord']);
      });
  }

}
