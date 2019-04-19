import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdbnjllkfaComponent } from './zdbnjllkfa.component';

describe('ZdbnjllkfaComponent', () => {
  let component: ZdbnjllkfaComponent;
  let fixture: ComponentFixture<ZdbnjllkfaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZdbnjllkfaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZdbnjllkfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
