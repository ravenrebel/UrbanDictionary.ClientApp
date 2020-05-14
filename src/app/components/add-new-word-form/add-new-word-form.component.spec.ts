import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewWordFormComponent } from './add-new-word-form.component';

describe('AddNewWordFormComponent', () => {
  let component: AddNewWordFormComponent;
  let fixture: ComponentFixture<AddNewWordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewWordFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewWordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
