import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdComponent } from './zd.component';

describe('ZdComponent', () => {
  let component: ZdComponent;
  let fixture: ComponentFixture<ZdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
