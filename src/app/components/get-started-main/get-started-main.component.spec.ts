import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStartedMainComponent } from './get-started-main.component';

describe('GetStartedMainComponent', () => {
  let component: GetStartedMainComponent;
  let fixture: ComponentFixture<GetStartedMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStartedMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStartedMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
