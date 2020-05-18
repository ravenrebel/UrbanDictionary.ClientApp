import { Component, OnInit } from '@angular/core';
import { WordDTO } from 'src/app/model/word-dto';
import { WordService } from 'src/app/service/word.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-random-word',
  templateUrl: './random-word.component.html',
  styleUrls: ['./random-word.component.css']
})
export class RandomWordComponent implements OnInit {

  randomWords: WordDTO[];
  datePipe = new DatePipe('en-US');

  constructor(
    private wordService: WordService
  ){};

  
  ngOnInit(): void {
    this.reload();
    this.share();
  }

  share(){
    
  }
  reload(){
    this.wordService.getRandom().subscribe(word =>
      {
        this.randomWords = word;
      });
  }
}
