import { Component, OnInit } from '@angular/core';
import { WordDTO } from 'src/app/model/word-dto';
import { WordService } from 'src/app/service/word.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-random-word',
  templateUrl: './random-word.component.html',
  styleUrls: ['./random-word.component.css']
})
export class RandomWordComponent implements OnInit {

  randomWord: WordDTO;

  constructor(
    private wordService: WordService
  ){};

  ngOnInit(): void {
    this.wordService.getRandom().subscribe(word =>
    {
      this.randomWord = word[0];
    });
  }

}
