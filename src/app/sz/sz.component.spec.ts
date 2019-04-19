import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzComponent } from './sz.component';

describe('SzComponent', () => {
  let component: SzComponent;
  let fixture: ComponentFixture<SzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
