import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UComponent } from './u.component';

describe('UComponent', () => {
  let component: UComponent;
  let fixture: ComponentFixture<UComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
