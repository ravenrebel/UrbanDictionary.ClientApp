import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewWordMainComponent } from './add-new-word-main.component';

describe('AddNewWordMainComponent', () => {
  let component: AddNewWordMainComponent;
  let fixture: ComponentFixture<AddNewWordMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewWordMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewWordMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
