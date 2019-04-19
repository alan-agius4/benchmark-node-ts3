import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdbnjllkgComponent } from './zdbnjllkg.component';

describe('ZdbnjllkgComponent', () => {
  let component: ZdbnjllkgComponent;
  let fixture: ComponentFixture<ZdbnjllkgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZdbnjllkgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZdbnjllkgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
