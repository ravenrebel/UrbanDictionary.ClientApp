import { Router } from '@angular/router';
import { createWordDTO } from './../../model/createWord-dto';
import { FormControl, Validators } from '@angular/forms';
import { WordService } from './../../service/word.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-word-form',
  templateUrl: './add-new-word-form.component.html',
  styleUrls: ['./add-new-word-form.component.scss']
})
export class AddNewWordFormComponent implements OnInit {

  wordNameControl = new FormControl('', [Validators.required]);
  definitionControl = new FormControl('', [Validators.required]);
  exampleControl = new FormControl('');
  tagsControl = new FormControl('');

  constructor(private wordService: WordService, private router: Router) { }

  createWord() {
    if (this.wordNameControl.valid && this.definitionControl.valid) {
      const createdWord: createWordDTO = new createWordDTO();
      createdWord.Name = this.wordNameControl.value;
      createdWord.Definition = this.definitionControl.value;
      createdWord.Example = this.exampleControl.value;
      createdWord.Tags = this.tagsControl.value.split(' ');

      this.wordService.createNewWord(createdWord).subscribe(() => this.router.navigate(['']));
    }
  }

  ngOnInit(): void {

  }

}
