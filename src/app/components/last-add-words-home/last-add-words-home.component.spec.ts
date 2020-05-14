import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastAddWordsHomeComponent } from './last-add-words-home.component';

describe('LastAddWordsHomeComponent', () => {
  let component: LastAddWordsHomeComponent;
  let fixture: ComponentFixture<LastAddWordsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastAddWordsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastAddWordsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
