import { Component, OnInit } from '@angular/core';
import { WordService } from 'src/app/service/word.service';
import { WordDTO } from 'src/app/model/word-dto';

@Component({
  selector: 'app-top-words',
  templateUrl: './top-words.component.html',
  styleUrls: ['./top-words.component.css']
})
export class TopWordsComponent implements OnInit {
  words = new Array<WordDTO>();
  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    debugger
    this.wordService.getTopTen().subscribe((result) => this.words = result);
  }

}
