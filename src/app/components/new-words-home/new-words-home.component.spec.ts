import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWordsHomeComponent } from './new-words-home.component';

describe('NewWordsHomeComponent', () => {
  let component: NewWordsHomeComponent;
  let fixture: ComponentFixture<NewWordsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWordsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWordsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
