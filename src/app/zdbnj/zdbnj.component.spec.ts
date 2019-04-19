import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdbnjComponent } from './zdbnj.component';

describe('ZdbnjComponent', () => {
  let component: ZdbnjComponent;
  let fixture: ComponentFixture<ZdbnjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZdbnjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZdbnjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
