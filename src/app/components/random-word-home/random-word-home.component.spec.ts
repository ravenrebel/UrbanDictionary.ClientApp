import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomWordHomeComponent } from './random-word-home.component';

describe('RandomWordHomeComponent', () => {
  let component: RandomWordHomeComponent;
  let fixture: ComponentFixture<RandomWordHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomWordHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomWordHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
