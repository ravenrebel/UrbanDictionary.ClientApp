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
export class AddNewWordFormComponent {

  wordNameControl = new FormControl('', [Validators.required]);
  definitionControl = new FormControl('', [Validators.required]);
  exampleControl = new FormControl('');
  tagsControl = new FormControl('');

  constructor(private wordService: WordService, private router: Router) { }

  createWord() {
    debugger
    if (this.wordNameControl.valid && this.definitionControl.valid) {
      const createWord = new createWordDTO();
      createWord.Name = this.wordNameControl.value;
      createWord.Definition = this.definitionControl.value;
      createWord.Example = this.exampleControl.value;
      createWord.Tags = this.tagsControl.value.split(' ');

      this.wordService.createNewWord(createWord).subscribe(() => this.router.navigate(['/']));
    }
  }

  ngOnInit(): void {

  }

}
