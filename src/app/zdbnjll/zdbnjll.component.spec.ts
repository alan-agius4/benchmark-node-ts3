import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdbnjllComponent } from './zdbnjll.component';

describe('ZdbnjllComponent', () => {
  let component: ZdbnjllComponent;
  let fixture: ComponentFixture<ZdbnjllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZdbnjllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZdbnjllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
