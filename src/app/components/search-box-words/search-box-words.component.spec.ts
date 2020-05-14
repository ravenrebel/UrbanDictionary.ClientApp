import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxWordsComponent } from './search-box-words.component';

describe('SearchBoxWordsComponent', () => {
  let component: SearchBoxWordsComponent;
  let fixture: ComponentFixture<SearchBoxWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBoxWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
