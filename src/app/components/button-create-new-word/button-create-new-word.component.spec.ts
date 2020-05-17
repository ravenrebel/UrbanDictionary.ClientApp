import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCreateNewWordComponent } from './button-create-new-word.component';

describe('ButtonCreateNewWordComponent', () => {
  let component: ButtonCreateNewWordComponent;
  let fixture: ComponentFixture<ButtonCreateNewWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonCreateNewWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCreateNewWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
