import { Router } from '@angular/router';
import { WordService } from 'src/app/service/word.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started-main',
  templateUrl: './get-started-main.component.html',
  styleUrls: ['./get-started-main.component.css']
})
export class GetStartedMainComponent{
  word = '';

  constructor(private wordService: WordService, private router: Router) { }
  ngOnInit(): void {
    this.search();

  }
  search() {

    this.wordService.setSearchedWord(this.word);
    this.wordService.getWords(this.word, 0)// 0 because it’s first
      .subscribe(result => {
        this.wordService.setWords(result);
        this.router.navigate(['/searchWord']);
      });
  }
}
