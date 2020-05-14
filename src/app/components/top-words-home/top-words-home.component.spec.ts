import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopWordsHomeComponent } from './top-words-home.component';

describe('TopWordsHomeComponent', () => {
  let component: TopWordsHomeComponent;
  let fixture: ComponentFixture<TopWordsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopWordsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopWordsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
