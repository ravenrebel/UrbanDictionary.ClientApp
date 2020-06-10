import { Component, OnInit } from '@angular/core';
import { WordDTO } from 'src/app/model/word-dto';
import { WordService } from 'src/app/service/word.service';
import { DatePipe } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-random-word',
  templateUrl: './random-word.component.html',
  styleUrls: ['./random-word.component.css']
})
export class RandomWordComponent implements OnInit {

  randomWords: WordDTO[];
  datePipe = new DatePipe('en-US');

  constructor(
    private router: Router,
    private wordService: WordService
  ){};


  ngOnInit(): void {
    this.reload();

  }


  reload(){
    this.wordService.getRandom().subscribe(word =>
      {
        this.randomWords = word;
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
      window.location.reload();
    });
  }

  dislike(id): void {
    this.wordService.dislikeWord(id).subscribe(element => {
      window.location.reload();
    });
  }

}
