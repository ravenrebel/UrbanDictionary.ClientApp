import { WordService } from 'src/app/service/word.service';
import { WordDTO } from 'src/app/model/word-dto';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-last-add-words',
  templateUrl: './last-add-words.component.html',
  styleUrls: ['./last-add-words.component.css']
})
export class LastAddWordsComponent implements OnInit {

  lastWords: WordDTO[];
  datePipe = new DatePipe('en-US');


  constructor(
    private router: Router,
    private wordService: WordService
  ){};

  ngOnInit(): void {
    this.reload();
  }

  reload(){
    this.wordService.getLastWords().subscribe(word =>
      {
        this.lastWords = word;
      });
  }
  copyMessage(word: WordDTO){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = `${word.name} – ${word.definition}`
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  like(id): void {
    this.wordService.likeWord(id).subscribe(element => {
      this.reload();
    });
  }

  dislike(id): void {
    this.wordService.dislikeWord(id).subscribe(element => {
      this.reload();
    });
  }
}
