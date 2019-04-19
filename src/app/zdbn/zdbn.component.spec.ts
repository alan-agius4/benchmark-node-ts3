import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdbnComponent } from './zdbn.component';

describe('ZdbnComponent', () => {
  let component: ZdbnComponent;
  let fixture: ComponentFixture<ZdbnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZdbnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZdbnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
