import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopWordsComponent } from './top-words.component';

describe('TopWordsComponent', () => {
  let component: TopWordsComponent;
  let fixture: ComponentFixture<TopWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
