import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdbComponent } from './zdb.component';

describe('ZdbComponent', () => {
  let component: ZdbComponent;
  let fixture: ComponentFixture<ZdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
