import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdbnjllkfComponent } from './zdbnjllkf.component';

describe('ZdbnjllkfComponent', () => {
  let component: ZdbnjllkfComponent;
  let fixture: ComponentFixture<ZdbnjllkfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZdbnjllkfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZdbnjllkfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
