import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastAddWordsComponent } from './last-add-words.component';

describe('LastAddWordsComponent', () => {
  let component: LastAddWordsComponent;
  let fixture: ComponentFixture<LastAddWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastAddWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastAddWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
