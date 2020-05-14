import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxWordsSmallComponent } from './search-box-words-small.component';

describe('SearchBoxWordsSmallComponent', () => {
  let component: SearchBoxWordsSmallComponent;
  let fixture: ComponentFixture<SearchBoxWordsSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBoxWordsSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxWordsSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
