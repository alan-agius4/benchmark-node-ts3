import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdbnjlComponent } from './zdbnjl.component';

describe('ZdbnjlComponent', () => {
  let component: ZdbnjlComponent;
  let fixture: ComponentFixture<ZdbnjlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZdbnjlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZdbnjlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
