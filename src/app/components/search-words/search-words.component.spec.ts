import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWordsComponent } from './search-words.component';

describe('SearchWordsComponent', () => {
  let component: SearchWordsComponent;
  let fixture: ComponentFixture<SearchWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
