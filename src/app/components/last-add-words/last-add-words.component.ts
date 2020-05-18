import { WordService } from 'src/app/service/word.service';
import { WordDTO } from 'src/app/model/word-dto';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-last-add-words',
  templateUrl: './last-add-words.component.html',
  styleUrls: ['./last-add-words.component.css']
})
export class LastAddWordsComponent implements OnInit {

  lastWords: WordDTO[];
  datePipe = new DatePipe('en-US');

  constructor(
    private wordService: WordService
  ){};

  
  ngOnInit(): void {
    this.reload();
  }

  reload(){
    this.wordService.getRandom().subscribe(word =>
      {
        this.lastWords = word;
      });
  }
}
