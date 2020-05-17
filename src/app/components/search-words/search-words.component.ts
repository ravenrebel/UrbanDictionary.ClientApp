import { WordService } from 'src/app/service/word.service';
import { WordDTO } from 'src/app/model/word-dto';
import { Component, ViewChild, Input, OnInit, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-search-words-component',
    templateUrl: './search-words.component.html',
    styleUrls: ['./search-words.component.css']
})
export class SearchWordsComponent implements OnInit, AfterViewInit {
    wordsNumber: number;
    words = new Array<WordDTO>();
    pageSize = 5;
    pageNumber = 1;
    searchingWord: string;
    displayedColumns: string[] = ['word', 'definition'];
    dataSource = new MatTableDataSource<WordDTO>();

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    constructor(private wordService: WordService) { }

    ngOnInit(): void {
        this.wordService.words$.subscribe(result => {
            this.words = result;
            this.dataSource.data = result.slice();
            this.getWordNumber();
        });
        this.wordService.searchedWord$.subscribe(result => this.searchingWord = result);
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

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
    getWordNumber() {
        this.wordService.getWordsNumber(this.searchingWord).subscribe((result) => {
            this.wordsNumber = result;
            this.loadWords();
        });
    }
}
