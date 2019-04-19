import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdbnjllkComponent } from './zdbnjllk.component';

describe('ZdbnjllkComponent', () => {
  let component: ZdbnjllkComponent;
  let fixture: ComponentFixture<ZdbnjllkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZdbnjllkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZdbnjllkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
