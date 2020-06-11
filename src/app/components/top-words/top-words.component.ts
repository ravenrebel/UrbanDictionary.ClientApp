import { Component, OnInit } from '@angular/core';
import { WordService } from 'src/app/service/word.service';
import { WordDTO } from 'src/app/model/word-dto';
import { DatePipe } from '@angular/common';
import {Router} from '@angular/router';


@Component({
  selector: 'app-top-words',
  templateUrl: './top-words.component.html',
  styleUrls: ['./top-words.component.css']
})
export class TopWordsComponent implements OnInit {
  words = new Array<WordDTO>();
  datePipe = new DatePipe('en-US');
  constructor(
    private router: Router,
    private wordService: WordService
  ){};

  ngOnInit(): void {
    this.wordService.getTopTen().subscribe((result) => this.words = result);
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
      this.wordService.getTopTen().subscribe(word =>
      {
        this.words = word;
      });
    });
  }

  dislike(id): void {
    this.wordService.dislikeWord(id).subscribe(element => {
      this.wordService.getTopTen().subscribe(word =>
      {
        this.words = word;
      });
    });
  }

}
