import { WordService } from 'src/app/service/word.service';
import { WordDTO } from 'src/app/model/word-dto';
import { Component, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-search-words',
  templateUrl: './search-words.component.html',
  styleUrls: ['./search-words.component.css']
})
export class SearchWordsComponent {
    wordsNumber: number;
    words = new Array<WordDTO>();
    pageSize = 5;
    pageNumber = 0;
    searchingWord: string;
    displayedColumns: string[] = ['word', 'definition'];

    @Input()
    set word(val: string) {
        this.searchingWord = val;
    }

    constructor(private wordService: WordService) { }

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    pageEvents(event: any) {
        if (event.pageIndex > this.pageNumber) {
            this.pageNumber++;
            if (this.pageNumber * this.pageSize - this.pageSize < this.words.length) {
                this.loadWords();
            }
        } else {
            this.pageNumber--;
        }
    }

    loadWords() {
        if (this.wordsNumber > this.words.length) {
            this.wordService.getWords(this.searchingWord, this.words.length).subscribe((result) => {
                this.words.concat(result);
            });
        }
    }
    getWordNumber() { }
}
